// src/seed/seed.service.ts
import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { AddressService } from 'src/modules/address/address.service';
import { CountryService } from 'src/modules/country/country.service';
import { Country } from 'src/modules/country/schemas/country.schema';

@Injectable()
export class SeedService {
  constructor(
    private readonly countryService: CountryService,
    private readonly addressService: AddressService,
  ) {}

  async seedCountries() {
    const countries = [
      { name: 'United States', code: 'US' },
      { name: 'Canada', code: 'CA' },
      { name: 'United Kingdom', code: 'GB' },
      { name: 'Germany', code: 'DE' },
      { name: 'France', code: 'FR' },
    ];

    for (const country of countries) {
      let countryToAdd = await this.countryService.findOneByCode(country.code);

      if (!countryToAdd) {
        countryToAdd = await this.countryService.create(country);
      }

      await this.seedAddress(countryToAdd, 1);
    }
  }

  async seedAddress(country: Country, count: number = 1) {
    for (let i = 0; i < count; i++) {
      const newAddress = {
        street: faker.location.streetAddress(),
        city: faker.location.city(),
        postalCode: faker.location.zipCode(),
        country: country.id,
      };

      await this.addressService.create(newAddress);
    }
  }
}
