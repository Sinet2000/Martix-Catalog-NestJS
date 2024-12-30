// src/modules/address/schemas/address.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Country } from 'src/modules/country/schemas/country.schema';

@Schema({ timestamps: true })
export class Address extends Document {
  @Prop({ required: true })
  street: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  postalCode: string;

  @Prop({ type: Types.ObjectId, ref: Country.name, required: true })
  country: Country | Types.ObjectId;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
