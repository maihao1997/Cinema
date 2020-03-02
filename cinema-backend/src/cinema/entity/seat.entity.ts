import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Seat{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  row: string;

  @Column()
  number: number;

  @Column()
  auditorium_id: string;

}
