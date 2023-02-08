import { Module } from '@nestjs/common';
import { ProductModule } from './product/ui';
import { MongooseModule } from '@nestjs/mongoose';
/*import { ConfigModule } from '@nestjs/config';
const mongodbUri = process.env.MONGODB_URI;*/

@Module({
  imports: [
    ProductModule,
    //ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/first'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
