import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitMeasurementsController } from './unitMeasurements.controller';
import { UnitMeasurementsService } from './unitMeasurements.service';
import { UnitMeasurement } from './entities/unitMeasurement.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnitMeasurement])],
  controllers: [UnitMeasurementsController],
  providers: [UnitMeasurementsService],
})
export class UnitMeasurementsModule {}
