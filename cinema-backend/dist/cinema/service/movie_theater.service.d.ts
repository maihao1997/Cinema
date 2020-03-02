import { Repository } from 'typeorm';
import { movie_theater_add_dto, movie_theater_update_dto } from '../dto/movie_theater.dto';
import { MovieTheater } from '../entity/movie_theater.entity';
export declare class MovieTheaterService {
    private readonly movieTheaterRepository;
    constructor(movieTheaterRepository: Repository<MovieTheater>);
    findAll(): Promise<MovieTheater[]>;
    getMovie(id: any): Promise<MovieTheater>;
    addMovieTheater(addMovieTheater: movie_theater_add_dto): Promise<MovieTheater>;
    updateMovieTheater(updateMovieTheater: movie_theater_update_dto): Promise<import("typeorm").UpdateResult>;
    deleteMovieTheater(id: string): Promise<MovieTheater>;
}
