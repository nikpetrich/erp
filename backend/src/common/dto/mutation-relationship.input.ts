import { Field, InputType, Int } from '@nestjs/graphql';
import { Min } from 'class-validator';

@InputType()
export class MutationRelationshipInput {
  @Field(() => Int, { nullable: false })
  @Min(1)
  id: number;
}
