import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Reservation{
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  movie_theater_id : string;

  @Column()
  reservation_type_id : string;

  @Column()
  seat_reserved_id: string;

  @Column()
  screening_id: string;

  @Column()
  movie_id: string;

}
