//this file is for mongodb entity
/*export type ProductDocument= Product & Document;
export type ProductSchema = new mongoose.Schema({

})*/
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProductDocument = HydratedDocument<Product>; //hydratedDocument?
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

