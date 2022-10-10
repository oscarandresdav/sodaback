import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;

  @IsBoolean()
  readonly status: boolean;
}
