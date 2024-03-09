import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  private readonly logger = new Logger(AddressService.name);
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(createAddressInput: CreateAddressInput) {
    const address = this.addressRepository.create(createAddressInput);
    try {
      await this.addressRepository.save(address);
      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll(): Promise<Address[]> {
    try {
      return this.addressRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findOne(id: number) {
    try {
      return this.addressRepository.findOneBy({ id });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateAddressInput: UpdateAddressInput) {
    try {
      const result = await this.addressRepository.update(
        id,
        updateAddressInput,
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
      const result = await this.addressRepository.delete(id);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
