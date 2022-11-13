import { UnitMeasurementsService } from './unit-measurements.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUnitMeasurementDto } from './dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from './dto/update-unit-measurement.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('unitmeasurements')
export class UnitMeasurementsController {
  constructor(
    private readonly unitMeasurementsService: UnitMeasurementsService,
  ) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.unitMeasurementsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unitMeasurementsService.findOne(id);
  }

  @Post()
  create(@Body() createUnitMeasurementDto: CreateUnitMeasurementDto) {
    return this.unitMeasurementsService.create(createUnitMeasurementDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUnitMeasurementDto: UpdateUnitMeasurementDto,
  ) {
    return this.unitMeasurementsService.update(id, updateUnitMeasurementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unitMeasurementsService.remove(id);
  }
}
