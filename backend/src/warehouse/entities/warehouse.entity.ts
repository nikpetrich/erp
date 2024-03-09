import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Article } from 'src/article/entities/article.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Warehouse {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: true })
  phone?: string;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: true })
  mail?: string;

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

  @OneToMany(() => Article, (article) => article.warehouse)
  @Field(() => [Article], { nullable: true })
  articles?: Article[];

  @ManyToOne(() => Address)
  @JoinColumn()
  @Field(() => Address, { nullable: true })
  address?: Address;
}
