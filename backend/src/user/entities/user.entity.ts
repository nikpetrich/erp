import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserRole } from './user-role.enum';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { nullable: false })
  id: number;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  @Field(() => String, { nullable: false })
  password: string;

  @Column({ type: 'enum', enum: UserRole, nullable: false })
  @Field(() => UserRole, { nullable: false })
  role: UserRole;

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

  @OneToMany(() => Invoice, (invoice) => invoice.customer, {
    nullable: true,
  })
  @Field(() => [Invoice], { nullable: true })
  invoices?: Invoice[];
}
