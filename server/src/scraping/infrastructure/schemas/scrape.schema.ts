import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ScrappedDataDocument = HydratedDocument<ScrappedData>;

@Schema()
export class ScrappedData {
  @Prop({ nullable: true })
  imageUrl: string;
}

export const ScrappedDataSchema = SchemaFactory.createForClass(ScrappedData);
