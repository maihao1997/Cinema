export class screen_add_dto {
    readonly movie_theater_id: string;
    readonly movie_id: string;
    readonly auditorium_id: string;
    readonly time_start: Date;
  }
  
export class screen_update_dto{
  readonly id: string;
  readonly movie_theater_id: string;
  readonly movie_id: string;
  readonly auditorium_id: string;
  readonly time_start: Date;
}