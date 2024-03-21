import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Customer {
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

  @OneToMany(() => Invoice, (invoice) => invoice.customer, { nullable: true })
  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];

  @ManyToOne(() => Address, (address) => address.warehouses, {
    eager: true,
    nullable: false,
  })
  @Field(() => Address, { nullable: false })
  address: Address;
}
