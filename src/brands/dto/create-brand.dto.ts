import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  readonly name: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
