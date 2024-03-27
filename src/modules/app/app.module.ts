import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from '../auth/auth.module';
import { WeatherModule } from '../weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../common/configs/configs';
import { RedisModule } from '../redis/redis.module';
import { PostgresModule } from '../postgress/postgres.module';
import { CustomEmailModule } from '../email/email-module';

@Module({
  imports: [
    RedisModule,
    AuthModule,
    WeatherModule,
    CustomEmailModule,
    PostgresModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
