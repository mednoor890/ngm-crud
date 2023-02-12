import { Injectable } from '@nestjs/common';
import { Product } from '../schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
/* repository is responsible for providing a way to interact with the database 
,It provides an abstracted layer between the product service (which implements business logic) and the database */
@Injectable()
export class ProductRepository {
  constructor(
    /* Injecting the mongoose model that corresponds to the Product class and assign it to private 
 property 'productModel'.This property is used in the methods to perform DB operations
 */
    @InjectModel(Product.name) private readonly productModel: Model<Product>, //@InjectModel(Produt.name) is used to inject the mongoose model into nest.js dependency injection system and .name property is used to provide the name of model being injected
  ) {}
  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }
  async findOne(name: string): Promise<Product> {
    return await this.productModel.findOne({ name }).exec();
  }
  async create(product: Product): Promise<Product> {
    const createdProduct = new this.productModel(product);
    return await createdProduct.save();
  }
  async update(id: string, product: Product): Promise<Product> {
    return await this.productModel.findOneAndUpdate({ id }, product).exec();
  }
  async delete(id: string): Promise<Product> {
    return await this.productModel.findOneAndRemove({ id });
  }
}
