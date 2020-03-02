import { Repository } from 'typeorm';
import { Reservation } from '../entity/reservation.entity';
export declare class ReservationService {
    private readonly reservationRepository;
    constructor(reservationRepository: Repository<Reservation>);
    findAll(): Promise<void>;
}
