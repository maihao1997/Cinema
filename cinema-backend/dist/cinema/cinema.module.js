"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const movie_service_1 = require("./service/movie.service");
const cinema_controller_1 = require("./cinema.controller");
const typeorm_1 = require("@nestjs/typeorm");
const movie_entity_1 = require("./entity/movie.entity");
const screening_service_1 = require("./service/screening.service");
const screening_entity_1 = require("./entity/screening.entity");
const movie_theater_service_1 = require("./service/movie_theater.service");
const movie_theater_entity_1 = require("./entity/movie_theater.entity");
const seat_reserved_entity_1 = require("./entity/seat_reserved.entity");
const seat_entity_1 = require("./entity/seat.entity");
const reservation_entity_1 = require("./entity/reservation.entity");
const reservation_service_1 = require("./service/reservation.service");
const auditorium_entity_1 = require("./entity/auditorium.entity");
let CinemaModule = class CinemaModule {
};
CinemaModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([movie_entity_1.Movie]),
            typeorm_1.TypeOrmModule.forFeature([screening_entity_1.Screening]),
            typeorm_1.TypeOrmModule.forFeature([movie_theater_entity_1.MovieTheater]),
            typeorm_1.TypeOrmModule.forFeature([seat_reserved_entity_1.SeatReserved]),
            typeorm_1.TypeOrmModule.forFeature([seat_entity_1.Seat]),
            typeorm_1.TypeOrmModule.forFeature([reservation_entity_1.Reservation]),
            typeorm_1.TypeOrmModule.forFeature([auditorium_entity_1.Auditorium]),
        ],
        controllers: [cinema_controller_1.CinemaController],
        providers: [movie_service_1.MovieService, screening_service_1.ScreeningService, movie_theater_service_1.MovieTheaterService, reservation_service_1.ReservationService],
    })
], CinemaModule);
exports.CinemaModule = CinemaModule;
//# sourceMappingURL=cinema.module.js.map