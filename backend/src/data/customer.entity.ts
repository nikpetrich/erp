import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Invoice } from './invoice.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  phone: string;

  @Column()
  mail: string;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @ManyToOne(() => Address, (address) => address.customers)
  address: Address;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  invoices: Invoice[];
}
