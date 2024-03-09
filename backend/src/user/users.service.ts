import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    try {
      await this.userRepository.save(user);
      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll(): Promise<User[]> {
    try {
      return this.userRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findOne(id: number) {
    try {
      return this.userRepository.findOneBy({ id });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    try {
      const result = await this.userRepository.update(id, updateUserInput);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async remove(id: number) {
    try {
      const result = await this.userRepository.delete(id);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
