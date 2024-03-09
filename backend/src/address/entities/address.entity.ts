import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Client } from 'src/client/entities/client.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Address {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  city: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  country: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  zip: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  street: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  houseNumber: string;

  @UpdateDateColumn({ type: 'timestamp', nullable: false })
  @Field(() => Date, { nullable: false })
  modified: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false,
  })
  @Field(() => Date, { nullable: false })
  created: Date;

  @OneToMany(() => Customer, (customer) => customer.address, { nullable: true })
  @Field(() => [Customer], { nullable: true })
  customers?: Customer[];

  @OneToMany(() => Warehouse, (warehouse) => warehouse.address, {
    nullable: true,
  })
  @Field(() => [Warehouse], { nullable: true })
  warehouses?: Warehouse[];

  @OneToMany(() => Client, (client) => client.address, { nullable: true })
  @Field(() => [Client], { nullable: true })
  clients?: Client[];
}
