import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';
import { MutationRelationshipInput } from 'src/common/dto/mutation-relationship.input';

@InputType()
export class CreateArticleInput {
  @Field(() => String, { nullable: false })
  number: string;

  @Field(() => String, { nullable: false })
  originalNumber: string;

  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Number, { nullable: false })
  @Min(0)
  price: number;

  @Field(() => Int, { nullable: false })
  @Min(0)
  amount: number;

  @Field(() => String, { nullable: true })
  manufacturer?: string;

  @Field(() => MutationRelationshipInput, { nullable: false })
  warehouse: MutationRelationshipInput;
}
