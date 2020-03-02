import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entity/movie.entity';
import { movie_add_dto, movie_update_dto } from '../dto/movie.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async addMovie(addMovie:movie_add_dto){
    const aMovie = new Movie();
    const {title, director, cast, description, duration_min, status, isStart} = addMovie;
    aMovie.title = title;
    aMovie.director = director;
    aMovie.cast = cast;
    aMovie.description = description;
    aMovie.duration_min = duration_min;
    aMovie.isStart = isStart;
    aMovie.status = status;
    return this.movieRepository.save(aMovie);
  }
  async updateMovie(updateMovie:movie_update_dto){
    const {id, title, director, cast, description, duration_min,isStart, status} = updateMovie;
    const aMovie = await this.movieRepository.findOne({
      where: [{ id }],
    });

    aMovie.title = title;
    aMovie.director = director;
    aMovie.cast = cast;
    aMovie.description = description;
    aMovie.duration_min = duration_min;
    aMovie.isStart  = isStart;
    aMovie.status = status;

    return this.movieRepository.update(id,aMovie);
  }

  async delete(id:string){
    const aMovie = await this.movieRepository.findOne({
      where:[{id}]
    })
    return this.movieRepository.remove(aMovie);
  }

}