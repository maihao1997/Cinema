import { ApiProperty } from '@nestjs/swagger';
export class movie_theater_add_dto {
  @ApiProperty()  
  readonly title: string;

  @ApiProperty()
  readonly place: string;
  }

export class movie_theater_update_dto {
    readonly id: string;
    readonly title: string;
    readonly place: string;
}