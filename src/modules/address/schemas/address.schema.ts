// src/modules/address/schemas/address.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export enum AddressType {
  PERSONAL = 'personal',
  WORK = 'work',
}

@Schema({ timestamps: true })
export class Address extends Document {
  @Prop({ required: true, enum: AddressType })
  type: AddressType; // Type of address: personal, work

  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ type: Types.ObjectId, ref: 'Country', required: true })
  country: Types.ObjectId;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
