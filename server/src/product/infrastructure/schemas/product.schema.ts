//this file is for mongodb entity
/*export type ProductDocument= Product & Document;
export type ProductSchema = new mongoose.Schema({

})*/
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type ProductDocument = Document<Product>; //hydratedDocument?
@Schema()
export class Product {
  @Prop()
  id: string;
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: string;
  @Prop({ required: false })
  image: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
