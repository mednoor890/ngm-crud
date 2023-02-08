import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../infrastructure/repositories/product.repository';
import { Product } from '../infrastructure/schemas/product.schema';
@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findAll(): Promise<Product[]> {
    return await this.productRepository.findAll();
  }
  async findById(id: number): Promise<Product> {
    return await this.productRepository.findOne(id);
  }

  async create(product: Product): Promise<Product> {
    return await this.productRepository.create(product);
  }

  async update(id: number, product: Product): Promise<Product> {
    return await this.productRepository.update(id, product);
  }

  async delete(id: number): Promise<Product> {
    return await this.productRepository.delete(id);
  }
}
