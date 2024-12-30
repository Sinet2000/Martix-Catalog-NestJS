import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Address } from '@modules/address/schemas/address.schema';
import { Communication } from './communication.schema';

@Schema({ timestamps: true })
export class Person extends Document {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  birthDate: Date; // Birthdate of the person

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Address' }] })
  addresses: Address[]; // Array of addresses

  @Prop({ type: Communication })
  communication: Communication; // Communication object containing mobiles and emails
}

export const PersonSchema = SchemaFactory.createForClass(Person);
