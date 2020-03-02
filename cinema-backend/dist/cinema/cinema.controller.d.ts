import { MovieService } from './service/movie.service';
import { Movie } from './entity/movie.entity';
import { movie_add_dto, movie_update_dto } from './dto/movie.dto';
import { ScreeningService } from './service/screening.service';
import { screen_add_dto, screen_update_dto } from './dto/screening.dto';
import { reservation_ticket_dto } from './dto/reservation_ticket.dto';
import { movie_theater_add_dto, movie_theater_update_dto } from './dto/movie_theater.dto';
import { MovieTheaterService } from './service/movie_theater.service';
import { ReservationService } from './service/reservation.service';
export declare class CinemaController {
    private readonly MovieService;
    private readonly ScreeningService;
    private readonly MovieTheaterService;
    private readonly ReservationService;
    constructor(MovieService: MovieService, ScreeningService: ScreeningService, MovieTheaterService: MovieTheaterService, ReservationService: ReservationService);
    findAll(): Promise<Movie[]>;
    addMovie(movie_add_dto: movie_add_dto): Promise<Movie>;
    updateMovie(updateMovie: movie_update_dto): Promise<import("typeorm").UpdateResult>;
    deleteMovie(id: string): Promise<Movie>;
    getScreening(): Promise<{
        list_Screening: any[];
        list_movie: Movie[];
        list_movie_theater: import("./entity/movie_theater.entity").MovieTheater[];
    }>;
    getAScreening(id: string): Promise<{
        screening_edit: any;
        list_movie_theater: import("./entity/movie_theater.entity").MovieTheater[];
        list_movie: Movie[];
    }>;
    addScreening(screen_add_dto: screen_add_dto): Promise<import("./entity/screening.entity").Screening>;
    updateScreening(screen_update_dto: screen_update_dto): Promise<import("typeorm").UpdateResult>;
    deleteScreening(id: string): Promise<import("typeorm").DeleteResult>;
    addMovieTheater(movie_theater_add_dto: movie_theater_add_dto): Promise<import("./entity/movie_theater.entity").MovieTheater>;
    getListMovieTheater(): Promise<import("./entity/movie_theater.entity").MovieTheater[]>;
    getMovieTheater(id: string): Promise<import("./entity/movie_theater.entity").MovieTheater>;
    updateMovieTheater(data: movie_theater_update_dto): Promise<import("typeorm").UpdateResult>;
    deleteMovieTheater(id: string): Promise<import("./entity/movie_theater.entity").MovieTheater>;
    chooseFilm(id: string): Promise<any[]>;
    chooseScreening(idMovieTheater: string, id: string): Promise<import("./entity/screening.entity").Screening[]>;
    chooseSeat(idAuditorium: string, idScreening: string): Promise<{
        list_seat_reserved: any[];
        list_available: any[];
    }>;
    reservationTicket(reservation_ticket_dto: reservation_ticket_dto): Promise<import("./entity/seat_reserved.entity").SeatReserved>;
    getListReservation(): Promise<void>;
}
