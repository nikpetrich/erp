import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => String, { nullable: false })
  number: string;

  @Field(() => String, { nullable: false })
  originalNumber: string;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Number, { nullable: false })
  price: number;

  @Field(() => Int, { nullable: false })
  amount: number;

  @Field(() => String, { nullable: true })
  manufacturer?: string;

  @Field(() => Int, { nullable: false })
  warehouseId: number;
}
