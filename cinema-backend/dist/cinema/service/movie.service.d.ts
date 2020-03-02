import { Repository } from 'typeorm';
import { Movie } from '../entity/movie.entity';
import { movie_add_dto, movie_update_dto } from '../dto/movie.dto';
export declare class MovieService {
    private readonly movieRepository;
    constructor(movieRepository: Repository<Movie>);
    findAll(): Promise<Movie[]>;
    addMovie(addMovie: movie_add_dto): Promise<Movie>;
    updateMovie(updateMovie: movie_update_dto): Promise<import("typeorm").UpdateResult>;
    delete(id: string): Promise<Movie>;
}
