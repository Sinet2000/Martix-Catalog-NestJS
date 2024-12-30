// src/modules/country/country.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country } from './schemas/country.schema';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country.name) private countryModel: Model<Country>,
  ) {}

  async findAll(): Promise<Country[]> {
    return this.countryModel.find().exec();
  }

  async findOneByCode(code: string): Promise<Country | null> {
    return this.countryModel.findOne({ code }).exec();
  }

  async create(countryData: Partial<Country>): Promise<Country> {
    const createdCountry = new this.countryModel(countryData);
    return createdCountry.save();
  }

  // ... other operations like update, delete, etc.
}
