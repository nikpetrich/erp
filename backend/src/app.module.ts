import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AddressResolverModule } from './address/address.resolver.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleResolverModule } from './article/article.resolver.module';
import { ClientControllerModule } from './client/client.resolver.module';
import { CustomerResolverModule } from './customer/customer.resolver.module';
import { InvoiceControllerModule } from './invoice/invoice.resolver.module';
import { MariaDBConfigService } from './mariadb.config.service';
import { UserResolverModule } from './user/user.resolver.module';
import { WarehouseResolverModule } from './warehouse/warehouse.resolver.module';

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
    AddressResolverModule,
    ClientControllerModule,
    CustomerResolverModule,
    ArticleResolverModule,
    InvoiceControllerModule,
    UserResolverModule,
    WarehouseResolverModule,
  ],
  controllers: [AppController],
  providers: [AppService, MariaDBConfigService],
})
export class AppModule {}
