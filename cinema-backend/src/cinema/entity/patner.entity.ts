import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Patner {
  @PrimaryGeneratedColumn()
  id: string;

}
