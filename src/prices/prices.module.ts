import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PricesController } from './prices.controller';
import { PricesService } from './prices.service';
import { Price } from './entities/price.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Price])],
  controllers: [PricesController],
  providers: [PricesService],
})
export class PricesModule {}
