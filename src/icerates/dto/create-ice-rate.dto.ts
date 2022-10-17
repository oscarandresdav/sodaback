import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateIceRateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly code: string;

  @IsString()
  readonly ad_valorem: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
