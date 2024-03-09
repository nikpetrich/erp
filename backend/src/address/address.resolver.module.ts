import { Module } from '@nestjs/common';
import { AddressResolver } from './address.resolver';
import { AddressServiceModule } from './address.service.module';

@Module({
  imports: [AddressServiceModule],
  providers: [AddressResolver],
})
export class AddressResolverModule {}
