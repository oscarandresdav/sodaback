import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
