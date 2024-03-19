import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  Admin = 0,
  Employee = 1,
  Consultant = 2,
}

registerEnumType(UserRole, {
  name: 'UserRole',
  description: 'The user role',
});
