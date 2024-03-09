import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  number: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  amount: number;

  @Column()
  @Field()
  status: number;

  @Column()
  @Field()
  manufacturer: string;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  modified: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created: Date;

  @ManyToOne(() => Warehouse)
  @JoinColumn()
  @Field(() => Warehouse)
  warehouse: Warehouse;
}
