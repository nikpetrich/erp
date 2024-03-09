import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehousesService: WarehouseService) {}

  @Mutation(() => Warehouse)
  createWarehouse(
    @Args('createWarehouseInput') createWarehouseInput: CreateWarehouseInput,
  ) {
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
  updateWarehouse(
    @Args('updateWarehouseInput') updateWarehouseInput: UpdateWarehouseInput,
  ) {
    return this.warehousesService.update(
      updateWarehouseInput.id,
      updateWarehouseInput,
    );
  }

  @Mutation(() => Warehouse)
  removeWarehouse(@Args('id', { type: () => Int }) id: number) {
    return this.warehousesService.remove(id);
  }
}
