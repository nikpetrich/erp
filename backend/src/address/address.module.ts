import { Module } from '@nestjs/common';
import { AddressResolver } from './address.resolver';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';

@Module({
  providers: [AddressResolver, AddressService],
  controllers: [AddressController],
})
export class AddressModule {}
