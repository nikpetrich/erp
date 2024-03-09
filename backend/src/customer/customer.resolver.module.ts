import { Module } from '@nestjs/common';
import { CustomerResolver } from './customer.resolver';
import { CustomerServiceModule } from './customer.service.module';

@Module({
  imports: [CustomerServiceModule],
  providers: [CustomerResolver],
})
export class CustomerResolverModule {}
