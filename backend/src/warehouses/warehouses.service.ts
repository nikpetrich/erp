import { Injectable } from '@nestjs/common';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';

@Injectable()
export class WarehousesService {
  create(createWarehouseInput: CreateWarehouseInput) {
    return 'This action adds a new warehouse';
  }

  findAll() {
    return `This action returns all warehouses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouse`;
  }

  update(id: number, updateWarehouseInput: UpdateWarehouseInput) {
    return `This action updates a #${id} warehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouse`;
  }
}
