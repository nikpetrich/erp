import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Article } from './article.entity';
import { Client } from './client.entity';
import { Customer } from './customer.entity';
import { User } from './user.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  discount: string; // TODO: figure out how to use this?

  @Column()
  payedBy: number;

  @Column()
  additionalInfo: string;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @ManyToOne(() => Client, (client) => client.invoices)
  client: Client;

  @ManyToOne(() => User, (user) => user.invoices)
  user: User;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  customer: Customer;

  @ManyToMany(() => Article)
  @JoinTable()
  articles: Article[];
}
