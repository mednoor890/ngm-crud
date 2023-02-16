import { ObjectType, Field } from '@nestjs/graphql';
@ObjectType()
export class ProductType {
  @Field()
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
