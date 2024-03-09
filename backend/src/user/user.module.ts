import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './users.service';

@Module({
  providers: [UserResolver, UserService],
})
export class UserModule {}
