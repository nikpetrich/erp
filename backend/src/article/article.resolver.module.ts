import { Module } from '@nestjs/common';
import { ArticleResolver } from './article.resolver';
import { ArticleServiceModule } from './article.service.module';

@Module({
  imports: [ArticleServiceModule],
  providers: [ArticleResolver],
})
export class ArticleResolverModule {}
