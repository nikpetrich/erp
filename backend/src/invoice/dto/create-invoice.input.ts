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
  additionalInfo: string;

  @Field(() => Int, { nullable: true })
  clientId?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => Int, { nullable: true })
  customerId?: number;
}
