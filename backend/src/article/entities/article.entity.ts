import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Warehouse } from 'src/warehouse/entities/warehouse.entity';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Article {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  number: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  originalNumber: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  title: string;

  @Column({ type: 'float', nullable: false })
  @Field(() => Number, { nullable: false })
  price: number;

  @Column({ type: 'int', nullable: false })
  @Field(() => Int, { nullable: false })
  amount: number;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: true })
  manufacturer?: string;

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

  @ManyToOne(() => Warehouse, (warehouse) => warehouse.articles, {
    eager: true,
    nullable: false,
  })
  @Field(() => Warehouse, { nullable: false })
  warehouse: Warehouse;
}
