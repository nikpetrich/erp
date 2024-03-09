import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { MutationRequestOutput } from 'src/common/dto/mutation-request.output';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouse } from './entities/warehouse.entity';
import { WarehouseService } from './warehouse.service';

@Resolver(() => Warehouse)
export class WarehouseResolver {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Mutation(() => MutationRequestOutput)
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

  @Mutation(() => MutationRequestOutput)
  updateWarehouse(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateWarehouseInput') updateWarehouseInput: UpdateWarehouseInput,
  ) {
    return this.warehouseService.update(id, updateWarehouseInput);
  }

  @Mutation(() => MutationRequestOutput)
  removeWarehouse(@Args('id', { type: () => Int }) id: number) {
    return this.warehouseService.remove(id);
  }
}
