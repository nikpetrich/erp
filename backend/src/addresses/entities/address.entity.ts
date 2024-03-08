import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Warehouse } from 'src/warehouses/entities/warehouse.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  country: string;

  @Column()
  @Field()
  zip: string;

  @Column()
  @Field()
  street: string;

  @Column()
  @Field()
  modified: Date;

  @Column()
  @Field()
  created: Date;

  @OneToMany(() => Customer, (customer) => customer.address)
  @Field(() => [Customer])
  customers: Customer[];

  @OneToMany(() => Warehouse, (warehouse) => warehouse.address)
  @Field(() => [Warehouse])
  warehouses: Warehouse[];

  @OneToMany(() => Client, (client) => client.address)
  @Field(() => [Client])
  clients: Client[];
}
