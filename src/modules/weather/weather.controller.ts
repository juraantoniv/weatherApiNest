import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { Get_CityWeatherDto } from './dto/get_city-weather.dto';
import { UpdateWeatherDto } from './dto/update-weather.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Post()
  async create (@Body() createWeatherDto: Get_CityWeatherDto) {
    return this.weatherService.create(createWeatherDto);
  }

  @Get()
  findAll() {
    return this.weatherService.findAll();
  }

  @Get("city")
 async findOne(@Body() city:Get_CityWeatherDto) {
    return await this.weatherService.findOne(city);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeatherDto: UpdateWeatherDto) {
    return this.weatherService.update(+id, updateWeatherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weatherService.remove(+id);
  }
}
