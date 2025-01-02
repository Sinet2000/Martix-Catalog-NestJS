import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true, unique: true })
  sku: string;

  @Prop([String])
  images: string[]; // ["https://s3.amazonaws.com/yourbucket/images/smartphone_xyz.jpg"]

  @Prop([{ type: Types.ObjectId, ref: 'Category' }])
  categories: Types.ObjectId[];

  @Prop({ default: 0 })
  stock: number;

  @Prop()
  specifications: Record<string, any>; // "brand": "TechBrand", "model": "XYZ",
}

export const ProductSchema = SchemaFactory.createForClass(Product);
