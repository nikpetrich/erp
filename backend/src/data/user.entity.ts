import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Invoice } from './invoice.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: number;

  @Column()
  modified: Date;

  @Column()
  created: Date;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];
}
