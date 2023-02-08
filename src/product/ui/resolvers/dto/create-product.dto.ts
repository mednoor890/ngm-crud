import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class ProductType {
  @Field(() => ID)
  id: number;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly price: number;
}
