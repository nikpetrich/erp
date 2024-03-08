import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { ClientsModule } from './clients/clients.module';
import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module';
import { MariaDBConfigService } from './mariadb.config.service';
import { UsersModule } from './users/users.module';
import { WarehousesModule } from './warehouses/warehouses.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '../.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: MariaDBConfigService,
      inject: [MariaDBConfigService],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AddressesModule,
    ClientsModule,
    CustomersModule,
    ArticlesModule,
    InvoicesModule,
    UsersModule,
    WarehousesModule,
  ],
  controllers: [AppController],
  providers: [AppService, MariaDBConfigService],
})
export class AppModule {}
