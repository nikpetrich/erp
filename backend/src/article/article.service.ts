import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  private readonly logger = new Logger(ArticleService.name);
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  async create(createArticleInput: CreateArticleInput) {
    const article = this.articleRepository.create(createArticleInput);
    try {
      await this.articleRepository.save(article);
      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findAll(): Promise<Article[]> {
    try {
      return this.articleRepository.find();
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  findOne(id: number) {
    try {
      return this.articleRepository.findOneBy({ id });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }

  async update(id: number, updateArticleInput: UpdateArticleInput) {
    try {
      const result = await this.articleRepository.update(
        id,
        updateArticleInput,
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
      const result = await this.articleRepository.delete(id);

      if (!result.affected) throw new Error('Item could not be updated');

      return { succeeded: true };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException(error.message);
    }
  }
}
