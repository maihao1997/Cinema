import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entity/movie.entity';
import { movie_add_dto, movie_update_dto, movie_delete_dto } from '../dto/movie.dto';
import { MovieTheater } from '../entity/movie_theater.entity';
import { SeatReserved } from '../entity/seat_reserved.entity';
import { Reservation } from '../entity/reservation.entity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
  ) {}

  async findAll(){
    const data = await this.reservationRepository.find()
   
  }
 

}