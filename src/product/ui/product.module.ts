import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductService } from '../domain/product.service';
import { ProductRepository } from '../infrastructure/repositories/product.repository';
import { ProductSchema } from '../infrastructure/schemas/product.schema';
import { join } from 'path';
import { ProductResolver } from './resolvers/product-mutation.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ProductResolverQuery } from './resolvers/product-query.resolver';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  providers: [
    ProductService,
    ProductRepository,
    ProductResolver,
    ProductResolverQuery,
  ],
})
export class ProductModule {}
