import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTypeProductDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly sort: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
