import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdateRequestOutput {
  @Field()
  succeeded: number;
}
