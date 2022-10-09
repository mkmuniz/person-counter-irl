import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import request from 'supertest';

describe('Testing main route', async () => {
  const app = await NestFactory.create(AppModule);
  const res = await app.listen(3000);

  const coisa = await request(res).get('/');

  expect(coisa.statusCode).toBe(200);
})