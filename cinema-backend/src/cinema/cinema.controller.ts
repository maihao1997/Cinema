import { Controller, Get, Post, Body, Put, Delete, Param, UseGuards, Headers } from '@nestjs/common';
import { MovieService } from './service/movie.service';
import { Movie } from './entity/movie.entity';
import { movie_add_dto, movie_update_dto } from './dto/movie.dto';
import { ScreeningService } from './service/screening.service';
import { screen_add_dto, screen_update_dto } from './dto/screening.dto';
import { reservation_ticket_dto } from './dto/reservation_ticket.dto';
import { movie_theater_add_dto, movie_theater_update_dto } from './dto/movie_theater.dto';
import { MovieTheaterService } from './service/movie_theater.service';
import { ReservationService } from './service/reservation.service';
import { AuthGuard } from '@nestjs/passport';
import * as jwt from 'jsonwebtoken';

@Controller('cinema')
@UseGuards(AuthGuard('jwt'))

export class CinemaController {
  constructor(
    private readonly MovieService: MovieService,
    private readonly ScreeningService: ScreeningService,
    private readonly MovieTheaterService: MovieTheaterService,
    private readonly ReservationService: ReservationService
  ) { }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.MovieService.findAll();
  }

  @Post()
  addMovie(@Body() movie_add_dto: movie_add_dto) {
    return this.MovieService.addMovie(movie_add_dto);
  }

  @Put()
  updateMovie(@Body() updateMovie: movie_update_dto) {
    return this.MovieService.updateMovie(updateMovie);
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return this.MovieService.delete(id);
  }

  @Get('/screening')
  getScreening() {
    return this.ScreeningService.getScreening();
  }

  @Get('/screening/:id')
  getAScreening(@Param('id') id: string) {
    return this.ScreeningService.getAScreening(id);
  }

  @Post('/screening')
  addScreening(@Body() screen_add_dto: screen_add_dto) {
    return this.ScreeningService.addScreening(screen_add_dto);
  }

  @Put('/screening')
  updateScreening(@Body() screen_update_dto: screen_update_dto) {
    return this.ScreeningService.updateScreening(screen_update_dto);
  }

  @Delete('screening/:id')
  deleteScreening(@Param('id') id: string) {
    return this.ScreeningService.deleteScreening(id);
  }

  @Post('/movie-theater')
  addMovieTheater(@Body() movie_theater_add_dto: movie_theater_add_dto) {
    return this.MovieTheaterService.addMovieTheater(movie_theater_add_dto);
  }

  @Get('/movie-theater')
  getListMovieTheater() {
    return this.MovieTheaterService.findAll();
  }

  @Get('/movie-theater/edit/:id')
  getMovieTheater(@Param('id') id: string) {
    return this.MovieTheaterService.getMovie(id);
  }

  @Put('/movie-theater')
  updateMovieTheater(@Body() data: movie_theater_update_dto) {
    return this.MovieTheaterService.updateMovieTheater(data);
  }

  @Delete('/movie-theater/:id')
  deleteMovieTheater(@Param('id') id: string) {
    return this.MovieTheaterService.deleteMovieTheater(id);
  }

  /*      Book ticket            */
  //choose movie theater => return list film in movie theater
  @Get('/movie-theater/:idMovieTheater')
  chooseFilm(@Param('idMovieTheater') id: string) {
    return this.ScreeningService.getListMovie(id);
  }
  //choose movie => return lists screening
  @Get('/movie-theater/:idMovieTheater/:idMovie')
  chooseScreening(@Param('idMovieTheater') idMovieTheater: string, @Param('idMovie') id: string) {
    return this.ScreeningService.getListScreening(idMovieTheater, id);
  }
  //choose screening => return seat available
  @Get('/movie-theater/seat/:idAuditorium/:idScreening')
  chooseSeat(@Param('idAuditorium') idAuditorium: string, @Param('idScreening') idScreening: string) {
    return this.ScreeningService.getListSeat(idAuditorium, idScreening);
  }
  //reservated
  @Post('/movie-theater/seat/reservation')
  reservationTicket(@Body() reservation_ticket_dto: reservation_ticket_dto) {
    console.log(reservation_ticket_dto);
    return this.ScreeningService.reservationTicket(reservation_ticket_dto);
  }

  /* End booking */

  @Get('/reservation')
  getListReservation() {
    return this.ReservationService.findAll();
  }


}
