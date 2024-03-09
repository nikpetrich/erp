import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field(() => String, { nullable: false })
  city: string;

  @Field(() => String, { nullable: false })
  country: string;

  @Field(() => String, { nullable: false })
  zip: string;

  @Field(() => String, { nullable: false })
  street: string;

  @Field(() => String, { nullable: false })
  houseNumber: string;
}
