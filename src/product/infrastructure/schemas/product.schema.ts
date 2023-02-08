//this file is for mongodb entity
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProductDocument = HydratedDocument<Product>; //hydratedDocument?
@Schema()
export class Product {
  @Prop()
  id: number;
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
