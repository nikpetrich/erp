import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Article } from 'src/article/entities/article.entity';
import { Client } from 'src/client/entities/client.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Invoice {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  discount: string; // TODO: figure out how to use this?

  @Column()
  @Field()
  payedBy: number;

  @Column()
  @Field()
  additionalInfo: string;

  @Column()
  @Field()
  modified: Date;

  @Column()
  @Field()
  created: Date;

  @ManyToOne(() => Client)
  @JoinColumn()
  @Field(() => Client)
  client: Client;

  @ManyToOne(() => User)
  @JoinColumn()
  @Field(() => User)
  user: User;

  @ManyToOne(() => Customer)
  @JoinColumn()
  @Field(() => Customer)
  customer: Customer;

  @ManyToMany(() => Article)
  @JoinTable()
  @Field(() => [Article])
  articles: Article[];
}
