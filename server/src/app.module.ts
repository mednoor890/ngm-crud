import { Global, Module } from '@nestjs/common';
import { ProductModule } from './product/ui';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ScrapingModule } from './scraping/ui';

@Global()
@Module({
  imports: [
    ProductModule,
    ScrapingModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URI'),
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
//providers: [ProductModule, ],
