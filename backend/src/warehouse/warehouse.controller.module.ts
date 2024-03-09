import { Module } from '@nestjs/common';
import { WarehouseController } from './warehouse.controller';
import { WarehouseModule } from './warehouse.module';

@Module({
  imports: [WarehouseModule],
  controllers: [WarehouseController],
})
export class WarehouseControllerModule {}
