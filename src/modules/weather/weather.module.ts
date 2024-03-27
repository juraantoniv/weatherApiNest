import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { RedisModule } from '../redis/redis.module';

import { EmailService } from '../../common/entities/email.service';

@Module({
  imports: [RedisModule],
  controllers: [WeatherController],
  providers: [WeatherService, EmailService],
})
export class WeatherModule {}
