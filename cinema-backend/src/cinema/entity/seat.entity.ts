import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Auditorium } from './auditorium.entity';

@Entity()
export class Seat{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  row: string;

  @Column()
  number: number;

  @OneToOne(type => Auditorium)
  @JoinColumn()
  auditorium_id: string;

}
