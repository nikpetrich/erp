import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWarehouseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
