import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class createProductInput {
  @Field()
  readonly id: string;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly price: string;
  @Field({ nullable: true })
  readonly image: string;
}
