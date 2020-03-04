import { Module } from '@nestjs/common';
import { MovieService } from './service/movie.service';
import { CinemaController } from './cinema.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entity/movie.entity';
import { ScreeningService } from './service/screening.service';
import { Screening } from './entity/screening.entity';
import { MovieTheaterService } from './service/movie_theater.service';
import { MovieTheater } from './entity/movie_theater.entity';
import { SeatReserved } from './entity/seat_reserved.entity';
import { Seat } from './entity/seat.entity';
import { Reservation } from './entity/reservation.entity';
import { ReservationService } from './service/reservation.service';
import { Auditorium } from './entity/auditorium.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    TypeOrmModule.forFeature([Screening]),
    TypeOrmModule.forFeature([MovieTheater]),
    TypeOrmModule.forFeature([SeatReserved]),
    TypeOrmModule.forFeature([Seat]),
    TypeOrmModule.forFeature([Reservation]),
    TypeOrmModule.forFeature([Auditorium]),
  ],
  controllers: [CinemaController],
  providers: [MovieService, ScreeningService, MovieTheaterService, ReservationService],
})
export class CinemaModule {}
