import { Repository } from 'typeorm';
import { Screening } from '../entity/screening.entity';
export declare class ScreeningService {
    private readonly screeningRepository;
    constructor(screeningRepository: Repository<Screening>);
    getCinema(): Promise<Screening[]>;
}
