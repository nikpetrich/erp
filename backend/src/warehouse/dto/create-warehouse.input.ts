import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWarehouseInput {
  @Field()
  title: string;

  @Field()
  phone: string;

  @Field()
  mail: string;
}
