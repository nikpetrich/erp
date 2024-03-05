import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';
import { Warehouse } from './warehouse.entity';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  zip: string;

  @Column()
  street: string;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @OneToMany(() => Customer, (customer) => customer.address)
  customers: Customer[];

  @OneToMany(() => Warehouse, (warehouse) => warehouse.address)
  warehouses: Warehouse[];
}
