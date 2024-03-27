import { PartialType } from '@nestjs/mapped-types';
import { Get_CityWeatherDto } from './get_city-weather.dto';

export class UpdateWeatherDto extends PartialType(Get_CityWeatherDto) {}
