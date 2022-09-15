import { RedisMemoryServer } from 'redis-memory-server';

export default async function (globalConfig, projectConfig) {
    const redisServer = new RedisMemoryServer({
        instance: {
            port: 6379
        },
        autoStart: false
    });

    await redisServer.start()

    console.log('redis server is ready');

    globalThis.__REDIS__ = redisServer;
}