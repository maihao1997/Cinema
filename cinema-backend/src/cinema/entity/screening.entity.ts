import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Screening{
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  movie_theater_id: string;

  @Column()
  movie_id: string;

  @Column()
  auditorium_id: string;

  @Column()
  time_start: Date;
}
