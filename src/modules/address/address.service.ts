// src/modules/address/address.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Address } from './schemas/address.schema';

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
}
