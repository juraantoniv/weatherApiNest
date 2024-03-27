import { CurrentWeather } from 'openweather-api-node';
import { CurrentWeatherT } from '../../../common/types/wheather.response.type';
import { convertTemperatures } from '../../../common/functions/convert.temperatures';

export class WeatherResponseMapper{

  public static toDto(data: Partial<CurrentWeather>): Partial<CurrentWeatherT> {
    return {
      weather: {
        temp: {
          cur: convertTemperatures(data.weather.temp.cur),
        },
        feelsLike: {
          cur: convertTemperatures(data.weather.feelsLike.cur),
        },
        clouds: data.weather.clouds,
        wind: data.weather.wind,
        main: data.weather.main,
        description: data.weather.description,
        pressure: data.weather.pressure,
        humidity: data.weather.humidity + "%",
        visibility: Math.ceil(data.weather.visibility / 1000) + "km",
      },
      astronomical: {
        sunrise: data.astronomical.sunrise.toLocaleString(),
        sunset: data.astronomical.sunset.toLocaleString(),
      },
    };
  }
}