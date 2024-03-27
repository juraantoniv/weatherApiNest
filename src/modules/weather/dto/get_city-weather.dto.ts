import { Transform } from 'class-transformer';
import { IsOptional, IsString, Length } from 'class-validator';

export class Get_CityWeatherDto {
  @IsString()
  @Length(2, 20)
  @Transform(({ value }) => value.trim())
  city: string;
}
