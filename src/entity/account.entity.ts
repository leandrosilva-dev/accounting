import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  accountId: number;

  @Column()
  account: string;

  @Column()
  level: number;
}
