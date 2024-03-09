import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWarehouseInput {
  @Field(() => String, { nullable: false })
  title: string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  mail?: string;

  // @Field(() => Address)
  // address: Address;
}
