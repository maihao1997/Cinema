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
const movie_theater_entity_1 = require("../entity/movie_theater.entity");
let MovieTheaterService = class MovieTheaterService {
    constructor(movieTheaterRepository) {
        this.movieTheaterRepository = movieTheaterRepository;
    }
    async findAll() {
        return this.movieTheaterRepository.find();
    }
    async getMovie(id) {
        return this.movieTheaterRepository.findOne({
            where: [{ id }]
        });
    }
    async addMovieTheater(addMovieTheater) {
        const obj_movie_theater = new movie_theater_entity_1.MovieTheater();
        const { title, place } = addMovieTheater;
        obj_movie_theater.title = title;
        obj_movie_theater.place = place;
        return this.movieTheaterRepository.save(obj_movie_theater);
    }
    async updateMovieTheater(updateMovieTheater) {
        const { id, title, place } = updateMovieTheater;
        const aMovie = await this.movieTheaterRepository.findOne({
            where: [{ id }],
        });
        aMovie.title = title;
        aMovie.place = place;
        return this.movieTheaterRepository.update(id, aMovie);
    }
    async deleteMovieTheater(id) {
        const aMovie = await this.movieTheaterRepository.findOne({
            where: [{ id }]
        });
        return this.movieTheaterRepository.remove(aMovie);
    }
};
MovieTheaterService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(movie_theater_entity_1.MovieTheater)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieTheaterService);
exports.MovieTheaterService = MovieTheaterService;
//# sourceMappingURL=movie_theater.service.js.map