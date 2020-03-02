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
const movie_entity_1 = require("../entity/movie.entity");
let MovieService = class MovieService {
    constructor(movieRepository) {
        this.movieRepository = movieRepository;
    }
    async findAll() {
        return this.movieRepository.find();
    }
    async addMovie(addMovie) {
        const aMovie = new movie_entity_1.Movie();
        const { title, director, cast, description, duration_min, status, isStart } = addMovie;
        aMovie.title = title;
        aMovie.director = director;
        aMovie.cast = cast;
        aMovie.description = description;
        aMovie.duration_min = duration_min;
        aMovie.isStart = isStart;
        aMovie.status = status;
        return this.movieRepository.save(aMovie);
    }
    async updateMovie(updateMovie) {
        const { id, title, director, cast, description, duration_min, isStart, status } = updateMovie;
        const aMovie = await this.movieRepository.findOne({
            where: [{ id }],
        });
        aMovie.title = title;
        aMovie.director = director;
        aMovie.cast = cast;
        aMovie.description = description;
        aMovie.duration_min = duration_min;
        aMovie.isStart = isStart;
        aMovie.status = status;
        return this.movieRepository.update(id, aMovie);
    }
    async delete(id) {
        const aMovie = await this.movieRepository.findOne({
            where: [{ id }]
        });
        return this.movieRepository.remove(aMovie);
    }
};
MovieService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(movie_entity_1.Movie)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MovieService);
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map