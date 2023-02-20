import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ScrappedDataSchema } from '../infrastructure/schemas/scrape.schema';
import { ScrapeService } from '../domain/scrape.service';
import { ScrapeRepository } from '../infrastructure/repositories/scrape.repository';
import { ScrapingResolver } from './resolvers/scraping-mutation';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: 'ScrappedData', schema: ScrappedDataSchema },
    ]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
  ],
  providers: [ScrapeService, ScrapeRepository, ScrapingResolver],
})
export class ScrapingModule {}
