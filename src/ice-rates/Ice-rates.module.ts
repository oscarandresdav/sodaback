import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IceRatesController } from './ice-rates.controller';
import { IceRatesService } from './ice-rates.service';
import { IceRate } from './entities/ice-rate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IceRate])],
  controllers: [IceRatesController],
  providers: [IceRatesService],
})
export class IceRatesModule {}
