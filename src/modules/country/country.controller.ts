// src/modules/country/country.controller.ts
import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CountryService } from './country.service';
import { RolesGuard } from '@common/guards/roles.guard';

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
  @UseGuards(RolesGuard)
  async createCountry(@Body() body: { code: string; name: string }) {
    return this.countryService.create(body);
  }
}
