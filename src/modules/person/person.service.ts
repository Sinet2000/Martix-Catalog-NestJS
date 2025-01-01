import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Person } from './schemas/person.schema';
import { Connection, Model, Types } from 'mongoose';
import { Address, AddressType } from '../address/schemas/address.schema';
import { CommunicationType } from './schemas/communication.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name) private readonly personModel: Model<Person>,
    @InjectModel(Address.name) private readonly addressModel: Model<Address>,
    @InjectConnection() private readonly connection: Connection, // Inject MongoDB connection
  ) {}

  /**
   * Create a new person with addresses and communication
   */
  async create(personData: {
    firstName: string;
    lastName: string;
    birthDate: Date;
    addresses: Array<{
      type: AddressType;
      street: string;
      city: string;
      postalCode: string;
      country: string; // Country ID
    }>;
    communication: {
      mobiles: Array<{ type: CommunicationType; number: string }>;
      emails: Array<{ type: CommunicationType; email: string }>;
    };
  }): Promise<Person> {
    // Start a session for transaction
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      // Save addresses within the transaction
      const savedAddresses = await Promise.all(
        personData.addresses.map((address) => {
          return new this.addressModel({
            ...address,
            country: new Types.ObjectId(address.country),
          }).save({ session });
        }),
      );

      // Save person with address IDs
      const person = new this.personModel({
        ...personData,
        addresses: savedAddresses.map((address) => address._id),
      });

      const savedPerson = await person.save({ session });

      // Commit the transaction
      await session.commitTransaction();
      return savedPerson;
    } catch (error) {
      // Rollback the transaction
      await session.abortTransaction();
      throw new BadRequestException(
        'Error saving person or addresses: ' + error.message,
      );
    } finally {
      // End the session
      session.endSession();
    }
  }

  /**
   * Get all persons
   */
  async findAll(): Promise<Person[]> {
    return this.personModel
      .find()
      .populate({
        path: 'addresses',
        populate: { path: 'country' },
      })
      .exec();
  }

  /**
   * Get a person by ID
   */
  async findById(id: string): Promise<Person> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid person ID');
    }

    const person = await this.personModel
      .findById(id)
      .populate({
        path: 'addresses',
        populate: { path: 'country' },
      })
      .exec();

    if (!person) {
      throw new BadRequestException('Person not found');
    }

    return person;
  }

  /**
   * Update a person by ID
   */
  async update(
    id: string,
    updateData: {
      addresses?: Array<{
        _id?: string;
        type: AddressType;
        street: string;
        city: string;
        postalCode: string;
        country: string; // Country ID
      }>;
      communication?: {
        mobiles?: Array<{ type: CommunicationType; number: string }>;
        emails?: Array<{ type: CommunicationType; email: string }>;
      };
      firstName?: string;
      lastName?: string;
      birthDate?: Date;
    },
  ): Promise<Person> {
    // Validate the person ID
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid person ID');
    }

    // Start a session for transaction
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      // If addresses are provided
      if (updateData.addresses) {
        this.validateAddresses(updateData.addresses);

        // Separate new and existing addresses
        const newAddresses = updateData.addresses.filter(
          (address) => !address._id,
        );
        const existingAddresses = updateData.addresses.filter(
          (address) => address._id,
        );

        // Save new addresses and collect their IDs
        const savedNewAddresses = await Promise.all(
          newAddresses.map((address) => {
            if (!Types.ObjectId.isValid(address.country)) {
              throw new BadRequestException('Invalid country ID');
            }
            return new this.addressModel({
              ...address,
              country: new Types.ObjectId(address.country),
            }).save({ session });
          }),
        );

        // Update the addresses array with both new and existing addresses
        updateData.addresses = [
          ...savedNewAddresses.map((address) => address._id),
          ...existingAddresses.map(
            (address) => new Types.ObjectId(address._id),
          ),
        ] as any;
      }

      // Validate communication if provided
      if (updateData.communication) {
        this.validateCommunication(updateData.communication);
      }

      // Update the person
      const updatedPerson = await this.personModel
        .findByIdAndUpdate(id, updateData, {
          new: true,
          runValidators: true,
          session,
        })
        .populate({
          path: 'addresses',
          populate: { path: 'country' },
        })
        .exec();

      if (!updatedPerson) {
        throw new BadRequestException('Person not found');
      }

      // Commit the transaction
      await session.commitTransaction();
      return updatedPerson;
    } catch (error) {
      // Rollback the transaction in case of error
      await session.abortTransaction();
      throw new BadRequestException(
        'Error updating person or addresses: ' + error.message,
      );
    } finally {
      // End the session
      session.endSession();
    }
  }

  /**
   * Validate the addresses array
   */
  private validateAddresses(addresses: { type: AddressType }[]): void {
    const personalAddresses = addresses.filter(
      (address) => address.type === AddressType.PERSONAL,
    );
    const workAddresses = addresses.filter(
      (address) => address.type === AddressType.WORK,
    );

    if (personalAddresses.length > 1) {
      throw new BadRequestException(
        'A person can have only one personal address',
      );
    }

    if (workAddresses.length > 1) {
      throw new BadRequestException('A person can have only one work address');
    }

    if (addresses.length > 2) {
      throw new BadRequestException(
        'A person can have a maximum of two addresses',
      );
    }
  }

  /**
   * Validate the communication object
   */
  private validateCommunication(communication: {
    mobiles?: Array<{ type: CommunicationType; number: string }>;
    emails?: Array<{ type: CommunicationType; email: string }>;
  }): void {
    const personalMobiles = communication.mobiles?.filter(
      (mobile) => mobile.type === CommunicationType.PERSONAL,
    );
    const personalEmails = communication.emails?.filter(
      (email) => email.type === CommunicationType.PERSONAL,
    );

    if (personalMobiles && personalMobiles.length > 1) {
      throw new BadRequestException(
        'A person can have only one personal mobile number',
      );
    }

    if (personalEmails && personalEmails.length > 1) {
      throw new BadRequestException(
        'A person can have only one personal email',
      );
    }
  }
}
