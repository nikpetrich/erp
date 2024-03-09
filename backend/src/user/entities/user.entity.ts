import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  username: string;

  @Column()
  @Field()
  password: string;

  @Column()
  @Field()
  role: number;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  modified: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @Field()
  created: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  @Field(() => [Invoice])
  invoices: Invoice[];
}
