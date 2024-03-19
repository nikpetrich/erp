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
  UpdateDateColumn,
} from 'typeorm';
import { PaymentMethod } from './payment-method.enum';

@Entity()
@ObjectType()
export class Invoice {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  title: string;

  @Column({ type: 'int', nullable: true })
  @Field(() => Int, { nullable: true })
  discount?: string; // TODO: figure out how to use this?

  @Column({ type: 'enum', enum: PaymentMethod, nullable: false })
  @Field(() => PaymentMethod, { nullable: false })
  paymentMethod: PaymentMethod;

  @Column({ type: 'varchar', nullable: true })
  @Field(() => String, { nullable: true })
  additionalInfo: string;

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

  @ManyToOne(() => Client, (client) => client.invoices, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'client_id' })
  @Field(() => Client, { nullable: true })
  client?: Client;

  @Column({ type: 'int', name: 'client_id', nullable: false })
  clientId?: number;

  @ManyToOne(() => User, (user) => user.invoices, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'user_id' })
  @Field(() => User, { nullable: true })
  user?: User;

  @Column({ type: 'int', name: 'user_id', nullable: false })
  userId?: number;

  @ManyToOne(() => Customer, (customer) => customer.invoices, {
    eager: true,
    nullable: true,
  })
  @JoinColumn({ name: 'customer_id' })
  @Field(() => Customer, { nullable: true })
  customer?: Customer;

  @Column({ type: 'int', name: 'customer_id', nullable: false })
  customerId?: number;

  @ManyToMany(() => Article)
  @JoinTable()
  @Field(() => [Article]) //TODO: check if this is correct
  articles: Article[];
}
