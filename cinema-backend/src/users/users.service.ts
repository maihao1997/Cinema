import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'Admin',
        password: '123456',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return console.log(this.users.find(user => user.username === username));
  }
}
