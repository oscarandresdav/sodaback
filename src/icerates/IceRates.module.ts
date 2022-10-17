import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceRatesController } from './iceRates.controller';
import { IceRatesService } from './iceRates.service';
import { IceRate } from './entities/iceRate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IceRate])],
  controllers: [IceRatesController],
  providers: [IceRatesService],
})
export class IceRatesModule {}
