import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUnitMeasurementDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly symbol: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
