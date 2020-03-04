import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Screening } from '../entity/screening.entity';
import { screen_add_dto, screen_update_dto } from '../dto/screening.dto';
import { SeatReserved } from '../entity/seat_reserved.entity';
import { Seat } from '../entity/seat.entity';
import { Movie } from '../entity/movie.entity';
import { Reservation } from '../entity/reservation.entity';
import { reservation_ticket_dto } from '../dto/reservation_ticket.dto';
import { MovieTheater } from '../entity/movie_theater.entity';

@Injectable()
export class ScreeningService {
  constructor(
    @InjectRepository(Screening)
    private readonly screeningRepository: Repository<Screening>,
    @InjectRepository(SeatReserved)
    private readonly seatReservedRepository: Repository<SeatReserved>,
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>,
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    @InjectRepository(Reservation)
    private readonly reservationRepository: Repository<Reservation>,
    @InjectRepository(MovieTheater)
    private readonly movieTheaterRepository: Repository<MovieTheater>
  ) { }

  async getScreening() {
    const data = await this.screeningRepository
      .createQueryBuilder('screening')
      .leftJoinAndSelect(Movie, 'movie', 'movie.id = screening.movie_id')
      .leftJoinAndSelect(MovieTheater, 'movie_theater', 'movie_theater.id = screening.movie_theater_id')
      .select(['movie.title', 'movie_theater.title', 'screening.time_start', 'screening.id']).getRawMany();

    let list_movie_theater = await this.movieTheaterRepository.find({
      select: ['id', 'title']
    });
    let list_movie = await this.movieRepository.find({
      select: ['id', 'title']
    });

    return {
      list_Screening: data,
      list_movie,
      list_movie_theater
    };
  }

  async getAScreening(id) {
    const data = await this.screeningRepository
      .createQueryBuilder('screening')
      .leftJoinAndSelect(Movie, 'movie', 'movie.id = screening.movie_id')
      .leftJoinAndSelect(MovieTheater, 'movie_theater', 'movie_theater.id = screening.movie_theater_id')
      .where('screening.id=:id', { id })
      .select(['screening.auditorium_id', 'movie.id', 'movie_theater.id', 'movie.title', 'movie_theater.title', 'screening.time_start', 'screening.id']).getRawOne();
    let list_movie_theater = await this.movieTheaterRepository.find({
      select: ['id', 'title']
    });
    let list_movie = await this.movieRepository.find({
      select: ['id', 'title']
    });
    return {
      screening_edit: data,
      list_movie_theater,
      list_movie
    };
  }

  async addScreening(addScreening: screen_add_dto) {
    const obj_screening = new Screening();
    const { movie_theater_id, movie_id, auditorium_id, time_start } = addScreening;

    obj_screening.movie_theater_id = movie_theater_id;
    obj_screening.movie_id = movie_id;
    obj_screening.auditorium_id = auditorium_id;
    obj_screening.time_start = time_start;

    return await this.screeningRepository.save(obj_screening);
  }

  async updateScreening(updateScreening: screen_update_dto) {
    const obj_screening = new Screening();
    const { id, movie_theater_id, movie_id, auditorium_id, time_start } = updateScreening;

    obj_screening.movie_theater_id = movie_theater_id;
    obj_screening.movie_id = movie_id;
    obj_screening.auditorium_id = auditorium_id;
    obj_screening.time_start = time_start;

    return await this.screeningRepository.update(id, obj_screening);
  }
  async deleteScreening(id) {
    return await this.screeningRepository.delete(id);
  }

  async getListMovie(id) {

    const list_movie_query = await this.movieRepository
      .createQueryBuilder('a')
      .select('a')
      .innerJoin(Screening, 's', 's.movie_id = a.id')
      .where('s.movie_theater_id = :id', { id }).getMany();

    const list_movie = [];
    list_movie_query.forEach(element => list_movie.push({ id: element.id, title: element.title }));
    return list_movie;
  }

  async getListScreening(idMovietheater, id) {
    return await this.screeningRepository
      .createQueryBuilder('a')
      .select('a')
      .where('a.movie_theater_id = :idMovietheater', { idMovietheater })
      .andWhere('a.movie_id = :id', { id }).getMany();

  }

  async getListSeat(idAuditorium, idScreening) {
    let obj_seat_reserved = await this.seatReservedRepository.find({
      select: ['seat_id'],
      where: [{ id: idScreening }]
    })
    let list_seat_reserved = []
    obj_seat_reserved.forEach(element => list_seat_reserved.push(parseInt(element.seat_id)));

    const obj_seat_all = await this.seatRepository.find({
      select: ['id'],
      where: [{ auditorium_id: idAuditorium }]
    })
    let list_seat_all = []
    obj_seat_all.forEach(e => list_seat_all.push(e.id));


    list_seat_all = list_seat_all.filter(function (item) {
      return !list_seat_reserved.includes(item);
    })

    return { list_seat_reserved: list_seat_reserved, list_available: list_seat_all }

  }

  async reservationTicket(reservation_ticket_dto: reservation_ticket_dto) {
    const reservation = new Reservation();
    const { list_seat_reserved_id, screening_id, movie_theater_id, reservation_type_id } = reservation_ticket_dto;

    reservation.seat_reserved_id = list_seat_reserved_id;
    reservation.screening_id = screening_id;
    reservation.movie_theater_id = movie_theater_id;
    reservation.reservation_type_id = reservation_type_id;

    let creat_reservation = await this.reservationRepository.save(reservation);
    console.log(creat_reservation )

    const seat_reserved = new SeatReserved()
    seat_reserved.seat_id = list_seat_reserved_id;
    seat_reserved.reservation_id = creat_reservation.id;
    seat_reserved.movie_theater_id = movie_theater_id;
    return await this.seatReservedRepository.save(seat_reserved);

  }
}  