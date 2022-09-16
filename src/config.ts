import { RedisClientOptions } from 'redis';

export interface Config {
    createClientConfiguration: RedisClientOptions
}