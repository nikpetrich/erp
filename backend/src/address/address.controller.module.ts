import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressModule } from './address.module';

@Module({
  imports: [AddressModule],
  controllers: [AddressController],
})
export class AddressControllerModule {}
