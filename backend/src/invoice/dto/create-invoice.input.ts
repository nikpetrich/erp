import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInput {
  @Field()
  title: string;

  @Field()
  discount: string;

  @Field()
  payedBy: number;

  @Field()
  additionalInfo: string;

  // @Field()
  // client: Client;

  // @Field()
  // user: User;

  // @Field()
  // customer: Customer;
}
