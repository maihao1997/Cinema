import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './cinema/entity/movie.entity';
import { CinemaModule } from './cinema/cinema.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Screening } from './cinema/entity/screening.entity';
import { MovieTheater } from './cinema/entity/movie_theater.entity';
import { SeatReserved } from './cinema/entity/seat_reserved.entity';
import { Seat } from './cinema/entity/seat.entity';
import { Reservation } from './cinema/entity/reservation.entity';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Movie,Screening,MovieTheater,SeatReserved,Seat,Reservation],
      synchronize: true,
    }),
    CinemaModule,
    AuthModule,
    UsersModule

  ],
  controllers: [AppController],
  providers: [AppService,
    {
    provide: APP_FILTER,
    useClass: HttpErrorFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }
  ],
})
export class AppModule {}
