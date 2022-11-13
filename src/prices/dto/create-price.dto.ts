import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreatePriceDto {
  @IsNumber()
  readonly price_non_tax: number;

  @IsNumber()
  readonly percentage_margin_sale: number;

  @IsNumber()
  readonly price_tax: number;

  @IsBoolean()
  @IsOptional()
  readonly status: boolean;
}
