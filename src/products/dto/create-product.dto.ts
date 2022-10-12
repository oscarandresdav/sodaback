import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Category } from '../../categories/entities/category.entity';

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
  @IsPositive()
  readonly stock: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  readonly minimunStock: number;

  @IsNumber()
  readonly cost: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;

  @IsString()
  @IsOptional()
  readonly category: Category;
}
