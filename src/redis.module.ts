import { DynamicModule, Module } from '@nestjs/common';
import { RedisClientService } from './redis.client.service';
import { Config } from './config';
import { CONFIG_OPTIONS } from './consts'

@Module({})
export class RedisModule {
  static register(config: Config): DynamicModule {
    return {
      module: RedisModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: config
        },
        RedisClientService
      ],
      global: (config?.additionalOptions?.isGlobal || false),
      exports: [RedisClientService],
    };
  }
}
