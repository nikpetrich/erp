import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressInput } from './dto/create-address.input';
import { UpdateAddressInput } from './dto/update-address.input';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  create(createAddressInput: CreateAddressInput) {
    const address = this.addressRepository.create(createAddressInput);
    return this.addressRepository.save(address);
  }

  findAll(): Promise<Address[]> {
    return this.addressRepository.find();
  }

  findOne(id: number) {
    return this.addressRepository.findOneBy({ id });
  }

  async update(id: number, updateAddressInput: UpdateAddressInput) {
    const result = await this.addressRepository.update(id, updateAddressInput);
    return { succeeded: result.affected > 0 ?? false };
  }

  async remove(id: number) {
    const result = await this.addressRepository.delete(id);
    return { succeeded: result.affected > 0 ?? false };
  }
}
