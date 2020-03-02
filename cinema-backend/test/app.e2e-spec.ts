import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';


let app = 'http://localhost:3000';

describe('ROOT', () => {
  it('should ping', () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

});

describe('AUTH', () =>{
  it('should register',() =>{
    const user: any ={
      username: 'username',
      password: 'password',
    };
    return request(app)
      .
  })
})