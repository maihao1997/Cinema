import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { movie_theater_add_dto, movie_theater_update_dto } from '../dto/movie_theater.dto';
import { MovieTheater } from '../entity/movie_theater.entity';

@Injectable()
export class MovieTheaterService {
  constructor(
    @InjectRepository(MovieTheater)
    private readonly movieTheaterRepository: Repository<MovieTheater>
  ) {}

  async findAll(): Promise<MovieTheater[]> {
    return this.movieTheaterRepository.find();
  }
  
  async getMovie(id){
    return this.movieTheaterRepository.findOne({
      where:[{id}]
    })
  }
  async addMovieTheater(addMovieTheater:movie_theater_add_dto){
    const obj_movie_theater = new MovieTheater();
    const {title, place} = addMovieTheater;
    obj_movie_theater.title = title;
    obj_movie_theater.place = place;
    return this.movieTheaterRepository.save(obj_movie_theater);
  }
  async updateMovieTheater(updateMovieTheater:movie_theater_update_dto){
    const {id, title, place} = updateMovieTheater;
    const aMovie = await this.movieTheaterRepository.findOne({
      where: [{ id }],
    });

    aMovie.title = title;
    aMovie.place = place;
 

    return this.movieTheaterRepository.update(id,aMovie);
  }

  async deleteMovieTheater(id:string){
    const aMovie = await this.movieTheaterRepository.findOne({
      where:[{id}]
    })
    return this.movieTheaterRepository.remove(aMovie);
  }

}