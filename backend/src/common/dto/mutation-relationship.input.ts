import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MutationRelationshipInput {
  @Field(() => Int, { nullable: false })
  id: number;
}
