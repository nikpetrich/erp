import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAddressInput {
  @Field()
  city: string;

  @Field()
  country: string;

  @Field()
  zip: string;

  @Field()
  street: string;

  @Field()
  houseNumber: string;
}
