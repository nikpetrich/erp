import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Mutation(() => Warehouse)
  createWarehouse(
    @Args('createWarehouseInput') createWarehouseInput: CreateWarehouseInput,
  ) {
    return this.warehouseService.create(createWarehouseInput);
  }

  @Query(() => [Warehouse], { name: 'warehouses' })
  findAll() {
    return this.warehouseService.findAll();
  }

  @Query(() => Warehouse, { name: 'warehouse' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.warehouseService.findOne(id);
  }

  @Mutation(() => Warehouse)
  updateWarehouse(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateWarehouseInput') updateWarehouseInput: UpdateWarehouseInput,
  ) {
    return this.warehouseService.update(id, updateWarehouseInput);
  }

  @Mutation(() => Warehouse)
  removeWarehouse(@Args('id', { type: () => Int }) id: number) {
    return this.warehouseService.remove(id);
  }
}
