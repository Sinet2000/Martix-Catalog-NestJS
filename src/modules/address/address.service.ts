// src/modules/address/address.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  Address,
  AddressType,
} from '@app/modules/address/schemas/address.schema';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel(Address.name) private addressModel: Model<Address>,
  ) {}

  async create(addressData: {
    street: string;
    city: string;
    postalCode: string;
    country: string; // Expect the country as a string (ObjectId in string format)
  }): Promise<Address> {
    const { country, ...rest } = addressData;
    const address = new this.addressModel({
      ...rest,
      country: new Types.ObjectId(country),
    });

    return address.save();
  }

  async findAll(): Promise<Address[]> {
    return this.addressModel.find().populate('country').exec();
  }

  async getById(id: string): Promise<Address | null> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid address ID');
    }

    const address = await this.addressModel
      .findById(id)
      .populate('country')
      .exec();

    return address;
  }

  async getAllByCountry(countryId: string): Promise<Address[]> {
    if (!Types.ObjectId.isValid(countryId)) {
      throw new NotFoundException('Invalid country ID');
    }

    return this.addressModel
      .find({ country: countryId })
      .populate('country')
      .exec();
  }

  async update(
    id: string,
    updateData: Partial<{
      type: AddressType;
      street: string;
      city: string;
      postalCode: string;
      country: string; // Country ID as ObjectId string
    }>,
  ): Promise<Address> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid address ID');
    }

    const { country, ...rest } = updateData;

    const updatedAddress = await this.addressModel
      .findByIdAndUpdate(
        id,
        {
          ...rest,
          ...(country && { country: new Types.ObjectId(country) }),
        },
        { new: true, runValidators: true },
      )
      .populate('country')
      .exec();

    if (!updatedAddress) {
      throw new NotFoundException('Address not found');
    }

    return updatedAddress;
  }
}
