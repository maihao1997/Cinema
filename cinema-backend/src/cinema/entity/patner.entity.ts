import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patner {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 500 })
  title: string;

  @Column()
  director: string;

  @Column()
  cast: number;

  @Column('text')
  description: string;

  @Column()
  duration_min: number;

  @Column()
  isStart : boolean;

  @Column()
  status: boolean;

}
