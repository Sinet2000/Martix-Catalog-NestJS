// src/modules/address/address.controller.ts
import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { Address } from '@app/modules/address/schemas/address.schema';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@ApiTags('addresses')
@Controller('addresses')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async createAddressDto(
    @Body() createAddressDto: CreateAddressDto,
  ): Promise<Address> {
    return this.addressService.create(createAddressDto);
  }

  @Post()
  async createAddress(
    @Body()
    body: {
      street: string;
      city: string;
      postalCode: string;
      country: string; // Expect country ID as a string
    },
  ): Promise<Address> {
    const { street, city, postalCode, country } = body;

    // Create the address using AddressService
    const createdAddress = await this.addressService.create({
      street,
      city,
      postalCode,
      country,
    });

    return createdAddress;
  }

  @Get()
  async findAll(): Promise<Address[]> {
    return this.addressService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Address> {
    return this.addressService.getById(id);
  }

  /**
   * Get all addresses by country
   * @param countryId Country ID
   */
  @Get('country/:countryId')
  async getAllByCountry(
    @Param('countryId') countryId: string,
  ): Promise<Address[]> {
    return this.addressService.getAllByCountry(countryId);
  }

  /**
   * Update an address by ID
   * @param id Address ID
   * @param updateAddressDto Data to update the address
   */
  @Put(':id')
  async updateAddress(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return this.addressService.update(id, updateAddressDto);
  }
}
