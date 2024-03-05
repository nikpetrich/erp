import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.entity';
import { Article } from './article.entity';

@Entity()
export class Warehouse {
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

  @ManyToOne(() => Address, (address) => address.warehouses)
  address: Address;

  @OneToMany(() => Article, (article) => article.warehouse)
  articles: Article[];
}
