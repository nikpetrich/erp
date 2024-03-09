import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWarehouseInput } from './dto/create-warehouse.input';
import { UpdateWarehouseInput } from './dto/update-warehouse.input';
import { Warehouse } from './entities/warehouse.entity';

@Injectable()
export class WarehouseService {
  private readonly logger = new Logger(WarehouseService.name);
  constructor(
    @InjectRepository(Warehouse)
    private readonly warehouseRepository: Repository<Warehouse>,
  ) {}

  async create(createWarehouseInput: CreateWarehouseInput) {
    const warehouse = this.warehouseRepository.create(createWarehouseInput);
    try {
      await this.warehouseRepository.save(warehouse);
      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll(): Promise<Warehouse[]> {
    try {
      return this.warehouseRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findOne(id: number) {
    try {
      return this.warehouseRepository.findOneBy({ id });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateWarehouseInput: UpdateWarehouseInput) {
    try {
      const result = await this.warehouseRepository.update(
        id,
        updateWarehouseInput,
      );

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.warehouseRepository.delete(id);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
