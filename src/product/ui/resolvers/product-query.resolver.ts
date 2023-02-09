import { Query, Resolver, Int, Args } from '@nestjs/graphql';
import { ProductService } from 'src/product/domain/product.service';
import { ProductType } from '../../../libs/dto/create-product.dto';
@Resolver()
export class ProductResolverQuery {
  constructor(private productService: ProductService) {}
  @Query(() => ProductType)
  async getProduct(
    @Args({ name: 'id', type: () => Int }) id: number,
  ): Promise<ProductType> {
    return await this.productService.findById(id);
  }
  @Query(() => [ProductType])
  async getAllProducts(): Promise<ProductType[]> {
    return await this.productService.findAll();
  }
}
