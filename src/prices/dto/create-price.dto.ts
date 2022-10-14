import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreatePriceDto {
  @IsNumber()
  readonly priceNonTax: number;

  @IsNumber()
  readonly percentageMarginSale: number;

  @IsNumber()
  readonly priceTax: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
