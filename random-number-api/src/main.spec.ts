import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';

describe('Bootstrap Function (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await NestFactory.create(AppModule);

    app.enableCors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,DELETE,POST',
      allowedHeaders: 'Content-Type, Accept',
    });

    await app.listen(3001);
  });

  it('should respond to requests with CORS enabled', async () => {
    await request(app.getHttpServer()).post('/random').expect(201);
  });

  it('should have CORS headers in the response', async () => {
    await request(app.getHttpServer())
      .get('/')
      .expect('Access-Control-Allow-Origin', '*');
  });

  afterAll(async () => {
    await app.close();
  });
});
