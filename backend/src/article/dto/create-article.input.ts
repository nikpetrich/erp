import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field()
  number: string;

  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  amount: number;

  @Field()
  status: number;

  @Field()
  manufacturer: string;
}
