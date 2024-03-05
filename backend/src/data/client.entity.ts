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
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  iban: string;

  @Column()
  bic: string;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @ManyToOne(() => Address, (address) => address.customers)
  address: Address;

  @OneToMany(() => Invoice, (invoice) => invoice.client)
  invoices: Invoice[];
}
