import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateCustomerInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  mail?: string;

  @Field(() => Int, { nullable: true })
  addressId?: number;
}
