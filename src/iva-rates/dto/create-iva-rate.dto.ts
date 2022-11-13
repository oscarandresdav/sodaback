import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateIvaRateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly code: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
