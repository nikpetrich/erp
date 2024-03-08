import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WarehousesService } from './warehouses.service';
import { Warehouse } from './entities/warehouse.entity';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';

@Resolver(() => Warehouse)
export class WarehousesResolver {
  constructor(private readonly warehousesService: WarehousesService) {}

  @Mutation(() => Warehouse)
  createWarehouse(@Args('createWarehouseInput') createWarehouseInput: CreateWarehouseInput) {
    return this.warehousesService.create(createWarehouseInput);
  }

  @Query(() => [Warehouse], { name: 'warehouses' })
  findAll() {
    return this.warehousesService.findAll();
  }

  @Query(() => Warehouse, { name: 'warehouse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.warehousesService.findOne(id);
  }

  @Mutation(() => Warehouse)
  updateWarehouse(@Args('updateWarehouseInput') updateWarehouseInput: UpdateWarehouseInput) {
    return this.warehousesService.update(updateWarehouseInput.id, updateWarehouseInput);
  }

  @Mutation(() => Warehouse)
  removeWarehouse(@Args('id', { type: () => Int }) id: number) {
    return this.warehousesService.remove(id);
  }
}
