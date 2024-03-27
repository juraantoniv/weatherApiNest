import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { RedisService } from './redis.service';
import { Config, RedisConfig } from '../../common/types/config.types';
import { Redis } from 'ioredis';
import { log } from 'console';

const redisProvider = {
  provide: 'REDIS_PROVIDER',
  useFactory: (configService: ConfigService<Config>) => {
    const redisConfig = configService.get<RedisConfig>('redis');
    return new Redis({
      host: redisConfig.host,
      port: redisConfig.port,
      password: redisConfig.password,
    });
  },
  inject: [ConfigService],
};

@Module({
  imports: [],
  controllers: [],
  providers: [redisProvider, RedisService],
  exports: [RedisService],
})
export class RedisModule {}
