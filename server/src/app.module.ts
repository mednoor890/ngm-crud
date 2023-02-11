import { Global, Logger, Module } from '@nestjs/common';
import { ProductModule } from './product/ui';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  /*ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: () => ({
        uri: process.env.MONGODB_URI,
      }),
      inject: [ConfigService],
    }),*/
  imports: [
    ProductModule,
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGODB_URI'),
      }),
    }),
    //MongooseModule.forRoot('mongodb://localhost:27017/first'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  /*constructor() {
    const logger = new Logger('AppModule');
    logger.log(`Starting with NODE_ENV=${process.env.MONGODB_ENV}`);
  }*/
}
