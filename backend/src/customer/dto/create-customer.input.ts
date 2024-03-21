import { Field, InputType } from '@nestjs/graphql';
import { MutationRelationshipInput } from 'src/common/dto/mutation-relationship.input';

@InputType()
export class CreateCustomerInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  mail?: string;

  @Field(() => MutationRelationshipInput, { nullable: false })
  address: MutationRelationshipInput;
}
