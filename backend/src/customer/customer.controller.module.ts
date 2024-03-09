import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerModule } from './customer.module';

@Module({
  imports: [CustomerModule],
  controllers: [CustomerController],
})
export class CustomerControllerModule {}
