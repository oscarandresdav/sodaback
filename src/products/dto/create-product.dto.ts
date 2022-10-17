import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { Category } from '../../categories/entities/category.entity';
import { Price } from '../../prices/entities/price.entity';
import { Brand } from '../../brands/entities/brand.entity';
import { TypeProduct } from '../../typeProducts/entities/typeProduct.entity';
import { IvaRate } from '../../ivarates/entities/ivaRate.entity';
import { IceRate } from '../../icerates/entities/iceRate.entity';

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

  @IsString()
  @IsOptional()
  readonly price: Price;

  @IsString()
  @IsOptional()
  readonly brand: Brand;

  @IsString()
  @IsOptional()
  readonly typeProduct: TypeProduct;

  @IsString()
  @IsOptional()
  readonly ivaRate: IvaRate;
  
  @IsString()
  @IsOptional()
  readonly iceRate: IceRate;
}
