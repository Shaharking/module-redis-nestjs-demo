import { createClient, RedisClientType } from 'redis';
import { Injectable, OnApplicationShutdown, OnModuleInit } from '@nestjs/common';

@Injectable()
export class RedisClientService implements OnApplicationShutdown, OnModuleInit {

  private _client: RedisClientType;

  public get client() {
    return this._client;
  }

  private set client(value) {
    this._client = value;
  }

  constructor() {
    this.client = createClient();
  }

  async onModuleInit() {
    await this.client.connect();
  }

  async onApplicationShutdown(signal?: string) {
    await this.client.quit();
  }

}
