// src/modules/address/address.controller.ts
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AddressService } from './address.service';
import { Address } from './schemas/address.schema';
import { CreateAddressDto } from './dto/create-address.dto';

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
  async getAllAddresses() {
    return this.addressService.findAll();
  }
}
