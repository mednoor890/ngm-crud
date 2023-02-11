import { ObjectType, Field, ID } from '@nestjs/graphql';
@ObjectType()
export class ProductType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly price: string;
  @Field({ nullable: true })
  readonly image: string;
}
