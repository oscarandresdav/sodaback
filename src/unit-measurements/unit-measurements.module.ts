import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitMeasurementsController } from './unit-measurements.controller';
import { UnitMeasurementsService } from './unit-measurements.service';
import { UnitMeasurement } from './entities/unit-measurement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnitMeasurement])],
  controllers: [UnitMeasurementsController],
  providers: [UnitMeasurementsService],
})
export class UnitMeasurementsModule {}
