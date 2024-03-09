import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './users.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserResolver, UserService],
  controllers: [UserController],
})
export class UserModule {}
