import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { RedisModule } from '../src/redis.module';
import { RedisClientService } from '../src/redis.client.service';

describe('RedisClientService (integration)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [RedisModule.register({
        createClientConfiguration: {
          socket: {
            port: 63790
          }
        }
      })],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('when application is running', () => {
    it('should have redis client ready', () => {
      const redisClientService: RedisClientService = app.get(RedisClientService, { strict: false });
      expect(redisClientService.client.isOpen).toEqual(true);
      expect(redisClientService.client.isReady).toEqual(true);
    });
  })

  afterAll(async () => {
    await app.close();
  })
});
