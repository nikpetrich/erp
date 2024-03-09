import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  private readonly logger = new Logger(ClientService.name);
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async create(createClientInput: CreateClientInput) {
    const client = this.clientRepository.create(createClientInput);
    try {
      await this.clientRepository.save(client);
      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll(): Promise<Client[]> {
    try {
      return this.clientRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findOne(id: number) {
    try {
      return this.clientRepository.findOneBy({ id });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateClientInput: UpdateClientInput) {
    try {
      const result = await this.clientRepository.update(id, updateClientInput);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.clientRepository.delete(id);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
