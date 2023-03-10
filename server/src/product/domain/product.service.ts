import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../infrastructure/repositories/product.repository';
import { Product } from '../infrastructure/schemas/product.schema';
@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
  async findById(name: string): Promise<Product> {
    return await this.productRepository.findOne(name);
  }

  async create(product: Product): Promise<Product> {
    return await this.productRepository.create(product);
  }

  async update(id: string, product: Product): Promise<Product> {
    return await this.productRepository.update(id, product);
  }

  async delete(id: string): Promise<Product> {
    return await this.productRepository.delete(id);
  }
}
