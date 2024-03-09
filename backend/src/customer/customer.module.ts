import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';

@Module({
  providers: [CustomerResolver, CustomerService],
  controllers: [CustomerController],
})
export class CustomerModule {}
