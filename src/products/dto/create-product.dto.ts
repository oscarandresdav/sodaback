import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  readonly mainCode: string;

  @IsString()
  @IsOptional()
  readonly auxCode: string;

  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly detail: string;

  @IsNumber()
  @IsOptional()
  readonly stock: number;

  @IsNumber()
  @IsOptional()
  readonly minimunStock: number;

  @IsNumber()
  readonly cost: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
