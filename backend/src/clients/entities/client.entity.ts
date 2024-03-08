import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/addresses/entities/address.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
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
export class Client {
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

  @ManyToOne(() => Address)
  @JoinColumn()
  @Field(() => Address)
  address: Address;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  @Field(() => [Invoice])
  invoices: Invoice[];
}
