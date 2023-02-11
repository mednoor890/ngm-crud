import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { ProductType } from '../../../libs/dto/create-product.dto';
import { ProductService } from 'src/product/domain/product.service';
import { createProductInput } from '../../../libs/inputs/product.input';

@Resolver()
export class ProductResolver {
  constructor(private productService: ProductService) {} 
  @Mutation((returns) => ProductType)
  async createProduct(
    @Args('input') input: createProductInput,
  ): Promise<ProductType> {
    const createdProduct = await this.productService.create(input);
    return createdProduct;
  }
  @Mutation(() => ProductType)
  async updateProduct(
    @Args('id') id: number,
    @Args('input') input: createProductInput,
  ): Promise<ProductType> {
    const updatedProduct = await this.productService.update(id, input);
    return updatedProduct;
  }
  @Mutation(() => ProductType)
  async deleteProduct(@Args('id') id: number): Promise<ProductType> {
    const deletedProduct = await this.productService.delete(id);
    return deletedProduct;
  }
}
