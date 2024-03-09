import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseResolver } from './warehouse.resolver';
import { WarehouseService } from './warehouse.service';

@Module({
  providers: [WarehouseResolver, WarehouseService],
  controllers: [WarehouseController],
})
export class WarehouseModule {}
