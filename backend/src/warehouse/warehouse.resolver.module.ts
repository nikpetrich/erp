import { Module } from '@nestjs/common';
import { WarehouseResolver } from './warehouse.resolver';
import { WarehouseServiceModule } from './warehouse.service.module';

@Module({
  imports: [WarehouseServiceModule],
  providers: [WarehouseResolver],
})
export class WarehouseResolverModule {}
