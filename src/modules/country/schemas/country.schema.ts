// src/modules/country/schemas/country.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Country extends Document {
  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ required: true, unique: true })
  name: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
