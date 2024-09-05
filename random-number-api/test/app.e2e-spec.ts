import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';

describe('AppModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should log request time with LoggerMiddleware', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    await request(app.getHttpServer())
      .post('/random')
      .expect(200)
      .expect((response) => {
        expect(consoleSpy).toHaveBeenCalled();
        expect(consoleSpy.mock.calls[0][0]).toMatch(
          /^Request... \d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/,
        );
      });

    consoleSpy.mockRestore();
  });

  afterAll(async () => {
    await app.close();
  });
});
