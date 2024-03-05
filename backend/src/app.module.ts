import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MariaDBConfigService } from './mariadb.config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '../.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: MariaDBConfigService,
      inject: [MariaDBConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, MariaDBConfigService],
})
export class AppModule {}
