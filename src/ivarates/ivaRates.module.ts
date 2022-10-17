import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IvaRatesController } from './ivaRates.controller';
import { IvaRatesService } from './ivaRates.service';
import { IvaRate } from './entities/ivaRate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IvaRate])],
  controllers: [IvaRatesController],
  providers: [IvaRatesService],
})
export class IvaRatesModule {}
