import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './schemas/person.schema';
import { AddressModule } from '../address/address.module';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
    AddressModule,
  ],
  providers: [PersonService],
  controllers: [PersonController],
})
export class PersonModule {}
