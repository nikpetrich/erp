import { Field, InputType, Int } from '@nestjs/graphql';
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

  @Field(() => Int, { nullable: false })
  clientId: number;

  @Field(() => Int, { nullable: false })
  userId: number;

  @Field(() => Int, { nullable: false })
  customerId: number;

  @Field(() => [Int], { nullable: false })
  articleIds: number[];
}
