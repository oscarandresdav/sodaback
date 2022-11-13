import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateContactDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly trade_name: string;

  @IsString()
  @IsOptional()
  readonly address: string;

  @IsString()
  @IsOptional()
  readonly email: string;

  @IsBoolean()
  @IsOptional()
  readonly client: boolean;

  @IsBoolean()
  @IsOptional()
  readonly provider: boolean;

  @IsBoolean()
  @IsOptional()
  readonly special_taxpayer: boolean;

  @IsString()
  @IsOptional()
  readonly additional_information: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
