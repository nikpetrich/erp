import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MutationRequestOutput {
  @Field()
  succeeded: number;
}
