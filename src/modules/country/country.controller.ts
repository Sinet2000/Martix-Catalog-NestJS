// src/modules/country/country.controller.ts
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';

@ApiTags('countries')
@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get()
  async getAllCountries() {
    return this.countryService.findAll();
  }

  @Get(':code')
  async getCountry(@Param('code') code: string) {
    return this.countryService.findOneByCode(code);
  }

  @Post()
  async createCountry(@Body() body: { code: string; name: string }) {
    return this.countryService.create(body);
  }
}
