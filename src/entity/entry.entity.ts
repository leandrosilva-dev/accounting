import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Entry {
  @PrimaryGeneratedColumn()
  entryId: number;

  @Column()
  accountId: number;
}
