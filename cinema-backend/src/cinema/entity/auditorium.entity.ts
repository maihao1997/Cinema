import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Auditorium{
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  title: string;

  @Column()
  seats_no: number;

}
