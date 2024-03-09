import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClientInput {
  @Field()
  title: string;

  @Field()
  phone: string;

  @Field()
  mail: string;

  // @Field(() => Address)
  // address: Address;
}
