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
const movie_service_1 = require("./service/movie.service");
const movie_dto_1 = require("./dto/movie.dto");
const screening_service_1 = require("./service/screening.service");
const screening_dto_1 = require("./dto/screening.dto");
const reservation_ticket_dto_1 = require("./dto/reservation_ticket.dto");
const movie_theater_dto_1 = require("./dto/movie_theater.dto");
const movie_theater_service_1 = require("./service/movie_theater.service");
const reservation_service_1 = require("./service/reservation.service");
const passport_1 = require("@nestjs/passport");
let CinemaController = class CinemaController {
    constructor(MovieService, ScreeningService, MovieTheaterService, ReservationService) {
        this.MovieService = MovieService;
        this.ScreeningService = ScreeningService;
        this.MovieTheaterService = MovieTheaterService;
        this.ReservationService = ReservationService;
    }
    findAll() {
        return this.MovieService.findAll();
    }
    addMovie(movie_add_dto) {
        return this.MovieService.addMovie(movie_add_dto);
    }
    updateMovie(updateMovie) {
        return this.MovieService.updateMovie(updateMovie);
    }
    deleteMovie(id) {
        return this.MovieService.delete(id);
    }
    getScreening() {
        return this.ScreeningService.getScreening();
    }
    getAScreening(id) {
        return this.ScreeningService.getAScreening(id);
    }
    addScreening(screen_add_dto) {
        return this.ScreeningService.addScreening(screen_add_dto);
    }
    updateScreening(screen_update_dto) {
        return this.ScreeningService.updateScreening(screen_update_dto);
    }
    deleteScreening(id) {
        return this.ScreeningService.deleteScreening(id);
    }
    addMovieTheater(movie_theater_add_dto) {
        return this.MovieTheaterService.addMovieTheater(movie_theater_add_dto);
    }
    getListMovieTheater() {
        return this.MovieTheaterService.findAll();
    }
    getMovieTheater(id) {
        return this.MovieTheaterService.getMovie(id);
    }
    updateMovieTheater(data) {
        return this.MovieTheaterService.updateMovieTheater(data);
    }
    deleteMovieTheater(id) {
        return this.MovieTheaterService.deleteMovieTheater(id);
    }
    chooseFilm(id) {
        return this.ScreeningService.getListMovie(id);
    }
    chooseScreening(idMovieTheater, id) {
        return this.ScreeningService.getListScreening(idMovieTheater, id);
    }
    chooseSeat(idAuditorium, idScreening) {
        return this.ScreeningService.getListSeat(idAuditorium, idScreening);
    }
    reservationTicket(reservation_ticket_dto) {
        console.log(reservation_ticket_dto);
        return this.ScreeningService.reservationTicket(reservation_ticket_dto);
    }
    getListReservation() {
        return this.ReservationService.findAll();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CinemaController.prototype, "findAll", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_dto_1.movie_add_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "addMovie", null);
__decorate([
    common_1.Put(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_dto_1.movie_update_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "updateMovie", null);
__decorate([
    common_1.Delete('/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "deleteMovie", null);
__decorate([
    common_1.Get('/screening'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "getScreening", null);
__decorate([
    common_1.Get('/screening/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "getAScreening", null);
__decorate([
    common_1.Post('/screening'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screening_dto_1.screen_add_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "addScreening", null);
__decorate([
    common_1.Put('/screening'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [screening_dto_1.screen_update_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "updateScreening", null);
__decorate([
    common_1.Delete('screening/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "deleteScreening", null);
__decorate([
    common_1.Post('/movie-theater'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_theater_dto_1.movie_theater_add_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "addMovieTheater", null);
__decorate([
    common_1.Get('/movie-theater'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "getListMovieTheater", null);
__decorate([
    common_1.Get('/movie-theater/edit/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "getMovieTheater", null);
__decorate([
    common_1.Put('/movie-theater'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [movie_theater_dto_1.movie_theater_update_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "updateMovieTheater", null);
__decorate([
    common_1.Delete('/movie-theater/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "deleteMovieTheater", null);
__decorate([
    common_1.Get('/movie-theater/:idMovieTheater'),
    __param(0, common_1.Param('idMovieTheater')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "chooseFilm", null);
__decorate([
    common_1.Get('/movie-theater/:idMovieTheater/:idMovie'),
    __param(0, common_1.Param('idMovieTheater')), __param(1, common_1.Param('idMovie')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "chooseScreening", null);
__decorate([
    common_1.Get('/movie-theater/seat/:idAuditorium/:idScreening'),
    __param(0, common_1.Param('idAuditorium')), __param(1, common_1.Param('idScreening')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "chooseSeat", null);
__decorate([
    common_1.Post('/movie-theater/seat/reservation'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reservation_ticket_dto_1.reservation_ticket_dto]),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "reservationTicket", null);
__decorate([
    common_1.Get('/reservation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CinemaController.prototype, "getListReservation", null);
CinemaController = __decorate([
    common_1.Controller('cinema'),
    common_1.UseGuards(passport_1.AuthGuard('jwt')),
    __metadata("design:paramtypes", [movie_service_1.MovieService,
        screening_service_1.ScreeningService,
        movie_theater_service_1.MovieTheaterService,
        reservation_service_1.ReservationService])
], CinemaController);
exports.CinemaController = CinemaController;
//# sourceMappingURL=cinema.controller.js.map