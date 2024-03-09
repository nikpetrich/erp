import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field()
  title: string;

  @Field()
  phone: string;

  @Field()
  mail: string;
}
