import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Warehouse } from './warehouse.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  title: string;

  @Column()
  price: number;

  @Column()
  amount: number;

  @Column()
  status: number;

  @Column()
  manufacturer: string;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.articles)
  warehouse: Warehouse;
}
