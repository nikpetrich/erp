import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
@Injectable()
export class MariaDBConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: this.configService.get<string>('DB_CONNECTION') as
        | 'mysql'
        | 'mariadb',
      host: this.configService.get<string>('DB_CONTAINER_NAME'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      entities: [this.configService.get<string>('DB_ENTITIES')],
      keepConnectionAlive: true,
      namingStrategy: new SnakeNamingStrategy(),
      synchronize: Boolean(this.configService.get<string>('DB_SYNCHRONIZE')),
    };
  }
}
