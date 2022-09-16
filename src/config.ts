import { RedisClientOptions } from 'redis';

export interface Config {
    createClientConfiguration: RedisClientOptions
    additionalOptions?: {
        isGlobal?: boolean;
    }
}

export { RedisClientOptions }