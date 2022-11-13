import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IvaRatesController } from './iva-rates.controller';
import { IvaRatesService } from './iva-rates.service';
import { IvaRate } from './entities/iva-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IvaRate])],
  controllers: [IvaRatesController],
  providers: [IvaRatesService],
})
export class IvaRatesModule {}
