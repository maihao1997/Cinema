import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { MovieTheater } from './movie_theater.entity';
import { SeatReserved } from './seat_reserved.entity';
import { Screening } from './screening.entity';
import { Movie } from './movie.entity';

@Entity()
export class Reservation{
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => MovieTheater)
  @JoinColumn()
  movie_theater_id: string;

  @Column()
  reservation_type_id : string;

  @OneToOne( type => SeatReserved)
  @JoinColumn()
  seat_reserved_id: string;

  @OneToOne( type => Screening)
  @JoinColumn()
  screening_id: string;

  @OneToOne( type => Movie)
  @JoinColumn()
  movie_id: string;

}
