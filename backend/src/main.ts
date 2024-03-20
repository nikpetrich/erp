import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // createConnection method will automatically read connection options
  // from your ormconfig file or environment variables
  // createConnection();

  const configService = app.get(ConfigService);
  const port = configService.get('BACKEND_PORT');

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port);
}
bootstrap();
