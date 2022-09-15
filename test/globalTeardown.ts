import { RedisMemoryServer } from 'redis-memory-server';

export default async function (globalConfig, projectConfig) {
    const redisServer: RedisMemoryServer = globalThis.__REDIS__ ;

    await redisServer.stop();

    console.log('redis server is stopped');
}