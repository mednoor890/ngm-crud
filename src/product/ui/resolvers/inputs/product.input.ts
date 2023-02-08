import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class createProductInput {
  @Field()
  readonly id: number;
  @Field()
  readonly name: string;
  @Field()
  readonly description: string;
  @Field()
  readonly price: number;
}
