import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class SeatReserved{
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  seat_id: string;

  @Column()
  reservation_id: string;

  @Column()
  movie_theater_id: string;

  @Column()
  screening_id: string;
}
