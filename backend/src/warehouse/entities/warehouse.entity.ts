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

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  modified: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created: Date;

  @OneToMany(() => Article, (article) => article.warehouse)
  @Field(() => [Article])
  articles: Article[];

  @ManyToOne(() => Address)
  @JoinColumn()
  @Field(() => Address)
  address: Address;
}
