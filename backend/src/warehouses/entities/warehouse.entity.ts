import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/addresses/entities/address.entity';
import { Article } from 'src/articles/entities/article.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
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

  @Column()
  @Field()
  modified: Date;

  @Column()
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
