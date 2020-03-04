import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MovieTheater } from './movie_theater.entity';
import { Auditorium } from './auditorium.entity';
import { Movie } from './movie.entity';

@Entity()
export class Screening{
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => MovieTheater)
  @JoinColumn()
  movie_theater_id: string;

  @OneToOne(type => Movie)
  @JoinColumn()
  movie_id: string;

  @OneToOne(type => Auditorium)
  @JoinColumn()
  auditorium_id: string;

  @Column()
  time_start: Date;
}
