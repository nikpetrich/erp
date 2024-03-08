import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  @Field()
  modified: Date;

  @Column()
  @Field()
  created: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  @Field(() => [Invoice])
  invoices: Invoice[];
}
