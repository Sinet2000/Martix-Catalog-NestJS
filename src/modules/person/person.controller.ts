import { Controller, Post, Get, Param, Body, Put } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './schemas/person.schema';

@ApiTags('Persons')
@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new person' })
  @ApiResponse({
    status: 201,
    description: 'The person has been successfully created.',
  })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  async createPerson(
    @Body() createPersonDto: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.create(createPersonDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all persons' })
  @ApiResponse({ status: 200, description: 'Return all persons.' })
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a person by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the person' })
  @ApiResponse({ status: 200, description: 'Return the person.' })
  @ApiResponse({ status: 404, description: 'Person not found.' })
  async findById(@Param('id') id: string): Promise<Person> {
    return this.personService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a person by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the person' })
  @ApiResponse({
    status: 200,
    description: 'The person has been successfully updated.',
  })
  @ApiResponse({ status: 404, description: 'Person not found.' })
  @ApiResponse({ status: 400, description: 'Validation error.' })
  async updatePerson(
    @Param('id') id: string,
    @Body() updatePersonDto: UpdatePersonDto,
  ): Promise<Person> {
    return this.personService.update(id, updatePersonDto);
  }
}
