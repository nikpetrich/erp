import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Address } from 'src/address/entities/address.entity';
import { Invoice } from 'src/invoice/entities/invoice.entity';
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
export class Client {
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

  @ManyToOne(() => Address)
  @JoinColumn()
  @Field(() => Address)
  address: Address;

  @OneToMany(() => Invoice, (invoice) => invoice.customer)
  @Field(() => [Invoice])
  invoices: Invoice[];
}
