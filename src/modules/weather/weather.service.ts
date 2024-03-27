import { Injectable } from '@nestjs/common';
import { Get_CityWeatherDto } from './dto/get_city-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { RedisService } from '../redis/redis.service';
import { ConfigService } from '@nestjs/config';
import { EmailService } from '../../common/entities/email.service';
import { EEmailAction } from '../../common/enums/email.action.enum';
import OpenWeatherAPI, {
  CurrentWeather,
  ForecastWeather,
} from "openweather-api-node";
import { AppConfig, Config } from '../../common/types/config.types';
import { WeatherResponseMapper } from './services/weather.responce.mapper';

@Injectable()
export class WeatherService {
  private readonly appConfig:AppConfig
  constructor(
    private readonly redisService: RedisService,
    private readonly emailService: EmailService,
    private readonly configService: ConfigService<Config>,
  ) {

    this.appConfig= configService.get<AppConfig>("app")
  }
  async create(createWeatherDto: Get_CityWeatherDto) {
    await this.emailService.send(
      'juraantoniv@gmail.com',
      EEmailAction.WHEATHER,
      {
        city: 'dadasd',
      },
    );
  }

  findAll() {
    // return `This action returns all weather`;

    return this.redisService.addOneToSet('dd2', '123');
  }

  async findOne(city: Get_CityWeatherDto) {

    const weather = new OpenWeatherAPI({
      key: this.appConfig.keyApi,
      locationName: city.city,
      units: "standard",
    });

    const data = await weather.getCurrent()

    return WeatherResponseMapper.toDto(data)


  }

  update(id: number, updateWeatherDto: UpdateWeatherDto) {
    return `This action updates a #${id} weather`;
  }

  remove(id: number) {
    return `This action removes a #${id} weather`;
  }
}
