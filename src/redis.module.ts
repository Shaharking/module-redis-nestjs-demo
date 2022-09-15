import { Module } from '@nestjs/common';
import { RedisClientService } from './redis.client.service';

@Module({
  imports: [],
  controllers: [],
  providers: [RedisClientService],
  exports: [RedisClientService],
})
export class RedisModule {}
