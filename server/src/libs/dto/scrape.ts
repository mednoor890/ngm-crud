import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class ScrapeType {
  @Field({ nullable: true })
  imageUrl: string;
}
