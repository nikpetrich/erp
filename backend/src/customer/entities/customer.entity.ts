import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
@ObjectType()
export class Customer {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  phone: string;

  @Column()
  @Field()
  mail: string;

  @Column()
  @Field()
  modified: Date;

  @Column()
  @Field()
  created: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  @Field(() => [Invoice])
  invoices: Invoice[];

  @ManyToOne(() => Address)
  @JoinColumn()
  @Field(() => Address)
  address: Address;
}
