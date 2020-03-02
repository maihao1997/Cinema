import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MovieTheater {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  title: string;

  @Column()
  place: string;

}
