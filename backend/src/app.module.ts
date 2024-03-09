import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AddressControllerModule } from './address/address.controller.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleControllerModule } from './article/article.controller.module';
import { ClientControllerModule } from './client/client.controller.module';
import { CustomerControllerModule } from './customer/customer.controller.module';
import { InvoiceControllerModule } from './invoice/invoice.controller.module';
import { MariaDBConfigService } from './mariadb.config.service';
import { UserControllerModule } from './user/user.controller.module';
import { WarehouseControllerModule } from './warehouse/warehouse.controller.module';

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
    AddressControllerModule,
    ClientControllerModule,
    CustomerControllerModule,
    ArticleControllerModule,
    InvoiceControllerModule,
    UserControllerModule,
    WarehouseControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService, MariaDBConfigService],
})
export class AppModule {}
