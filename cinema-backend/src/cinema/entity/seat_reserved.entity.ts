import { Column, Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Seat } from './seat.entity';
import { Reservation } from './reservation.entity';
import { MovieTheater } from './movie_theater.entity';
import { Screening } from './screening.entity';

@Entity()
export class SeatReserved{
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(type => Seat)
  @JoinColumn()
  seat_id: string;

  @OneToOne(type => Reservation)
  @JoinColumn()
  reservation_id: string;

  @OneToOne(type => MovieTheater)
  @JoinColumn()
  movie_theater_id: string;

  @OneToOne(type => Screening)
  @JoinColumn()
  screening_id: string;
}
