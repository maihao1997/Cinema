"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const screening_entity_1 = require("../entity/screening.entity");
const seat_reserved_entity_1 = require("../entity/seat_reserved.entity");
const seat_entity_1 = require("../entity/seat.entity");
const movie_entity_1 = require("../entity/movie.entity");
const reservation_entity_1 = require("../entity/reservation.entity");
const movie_theater_entity_1 = require("../entity/movie_theater.entity");
let ScreeningService = class ScreeningService {
    constructor(screeningRepository, seatReservedRepository, seatRepository, movieRepository, reservationRepository, movieTheaterRepository) {
        this.screeningRepository = screeningRepository;
        this.seatReservedRepository = seatReservedRepository;
        this.seatRepository = seatRepository;
        this.movieRepository = movieRepository;
        this.reservationRepository = reservationRepository;
        this.movieTheaterRepository = movieTheaterRepository;
    }
    async getScreening() {
        const data = await this.screeningRepository
            .createQueryBuilder('screening')
            .leftJoinAndSelect(movie_entity_1.Movie, 'movie', 'movie.id = screening.movie_id')
            .leftJoinAndSelect(movie_theater_entity_1.MovieTheater, 'movie_theater', 'movie_theater.id = screening.movie_theater_id')
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
            .leftJoinAndSelect(movie_entity_1.Movie, 'movie', 'movie.id = screening.movie_id')
            .leftJoinAndSelect(movie_theater_entity_1.MovieTheater, 'movie_theater', 'movie_theater.id = screening.movie_theater_id')
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
    async addScreening(addScreening) {
        const obj_screening = new screening_entity_1.Screening();
        const { movie_theater_id, movie_id, auditorium_id, time_start } = addScreening;
        obj_screening.movie_theater_id = movie_theater_id;
        obj_screening.movie_id = movie_id;
        obj_screening.auditorium_id = auditorium_id;
        obj_screening.time_start = time_start;
        return await this.screeningRepository.save(obj_screening);
    }
    async updateScreening(updateScreening) {
        const obj_screening = new screening_entity_1.Screening();
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
            .innerJoin(screening_entity_1.Screening, 's', 's.movie_id = a.id')
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
        });
        let list_seat_reserved = [];
        obj_seat_reserved.forEach(element => list_seat_reserved.push(parseInt(element.seat_id)));
        const obj_seat_all = await this.seatRepository.find({
            select: ['id'],
            where: [{ auditorium_id: idAuditorium }]
        });
        let list_seat_all = [];
        obj_seat_all.forEach(e => list_seat_all.push(e.id));
        list_seat_all = list_seat_all.filter(function (item) {
            return !list_seat_reserved.includes(item);
        });
        return { list_seat_reserved: list_seat_reserved, list_available: list_seat_all };
    }
    async reservationTicket(reservation_ticket_dto) {
        const reservation = new reservation_entity_1.Reservation();
        const { list_seat_reserved_id, screening_id, movie_theater_id, reservation_type_id } = reservation_ticket_dto;
        reservation.seat_reserved_id = list_seat_reserved_id;
        reservation.screening_id = screening_id;
        reservation.movie_theater_id = movie_theater_id;
        reservation.reservation_type_id = reservation_type_id;
        let creat_reservation = await this.reservationRepository.save(reservation);
        console.log(creat_reservation);
        const seat_reserved = new seat_reserved_entity_1.SeatReserved();
        seat_reserved.seat_id = list_seat_reserved_id;
        seat_reserved.reservation_id = creat_reservation.id;
        seat_reserved.movie_theater_id = movie_theater_id;
        return await this.seatReservedRepository.save(seat_reserved);
    }
};
ScreeningService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(screening_entity_1.Screening)),
    __param(1, typeorm_1.InjectRepository(seat_reserved_entity_1.SeatReserved)),
    __param(2, typeorm_1.InjectRepository(seat_entity_1.Seat)),
    __param(3, typeorm_1.InjectRepository(movie_entity_1.Movie)),
    __param(4, typeorm_1.InjectRepository(reservation_entity_1.Reservation)),
    __param(5, typeorm_1.InjectRepository(movie_theater_entity_1.MovieTheater)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ScreeningService);
exports.ScreeningService = ScreeningService;
//# sourceMappingURL=screening.service.js.map