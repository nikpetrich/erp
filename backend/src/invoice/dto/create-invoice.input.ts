import { Field, InputType, Int } from '@nestjs/graphql';
import { MutationRelationshipInput } from 'src/common/dto/mutation-relationship.input';
import { PaymentMethod } from '../entities/payment-method.enum';

@InputType()
export class CreateInvoiceInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => Int, { nullable: true })
  discount?: string; // TODO: figure out how to use this?

  @Field(() => PaymentMethod, { nullable: false })
  paymentMethod: PaymentMethod;

  @Field(() => String, { nullable: true })
  additionalInfo?: string;

  @Field(() => MutationRelationshipInput, { nullable: false })
  client: MutationRelationshipInput;

  @Field(() => MutationRelationshipInput, { nullable: false })
  user: MutationRelationshipInput;

  @Field(() => MutationRelationshipInput, { nullable: false })
  customer: MutationRelationshipInput;

  @Field(() => [Int], { nullable: false })
  articleIds: number[];
}
