import { Field, InputType } from '@nestjs/graphql';
import { UserRole } from '../entities/user-role.enum';

@InputType()
export class CreateUserInput {
  @Field(() => String, { nullable: false })
  username: string;

  @Field(() => String, { nullable: false })
  password: string;

  @Field(() => UserRole, { nullable: false })
  role: UserRole;
}
