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
import { TypeProduct } from '../../type-products/entities/type-product.entity';
import { IvaRate } from '../../iva-rates/entities/iva-rate.entity';
import { IceRate } from '../../ice-rates/entities/ice-rate.entity';
import { UnitMeasurement } from '../../unit-measurements/entities/unit-measurement.entity';

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

  @IsString()
  @IsOptional()
  readonly unitMeasurement: UnitMeasurement;
}
