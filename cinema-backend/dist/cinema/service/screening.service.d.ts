import { Repository } from 'typeorm';
import { Screening } from '../entity/screening.entity';
import { screen_add_dto, screen_update_dto } from '../dto/screening.dto';
import { SeatReserved } from '../entity/seat_reserved.entity';
import { Seat } from '../entity/seat.entity';
import { Movie } from '../entity/movie.entity';
import { Reservation } from '../entity/reservation.entity';
import { reservation_ticket_dto } from '../dto/reservation_ticket.dto';
import { MovieTheater } from '../entity/movie_theater.entity';
export declare class ScreeningService {
    private readonly screeningRepository;
    private readonly seatReservedRepository;
    private readonly seatRepository;
    private readonly movieRepository;
    private readonly reservationRepository;
    private readonly movieTheaterRepository;
    constructor(screeningRepository: Repository<Screening>, seatReservedRepository: Repository<SeatReserved>, seatRepository: Repository<Seat>, movieRepository: Repository<Movie>, reservationRepository: Repository<Reservation>, movieTheaterRepository: Repository<MovieTheater>);
    getScreening(): Promise<{
        list_Screening: any[];
        list_movie: Movie[];
        list_movie_theater: MovieTheater[];
    }>;
    getAScreening(id: any): Promise<{
        screening_edit: any;
        list_movie_theater: MovieTheater[];
        list_movie: Movie[];
    }>;
    addScreening(addScreening: screen_add_dto): Promise<Screening>;
    updateScreening(updateScreening: screen_update_dto): Promise<import("typeorm").UpdateResult>;
    deleteScreening(id: any): Promise<import("typeorm").DeleteResult>;
    getListMovie(id: any): Promise<any[]>;
    getListScreening(idMovietheater: any, id: any): Promise<Screening[]>;
    getListSeat(idAuditorium: any, idScreening: any): Promise<{
        list_seat_reserved: any[];
        list_available: any[];
    }>;
    reservationTicket(reservation_ticket_dto: reservation_ticket_dto): Promise<SeatReserved>;
}
