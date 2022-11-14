import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UnitMeasurement } from './entities/unit-measurement.entity';
import { CreateUnitMeasurementDto } from './dto/create-unit-measurement.dto';
import { UpdateUnitMeasurementDto } from './dto/update-unit-measurement.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class UnitMeasurementsService {
  constructor(
    @InjectRepository(UnitMeasurement)
    private readonly unitMeasurementRepository: Repository<UnitMeasurement>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.unitMeasurementRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const unitMeasurement = await this.unitMeasurementRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!unitMeasurement) {
      throw new NotFoundException(
        `Unit of Measurement with id=>{${id}} not found`,
      );
    }
    return unitMeasurement;
  }

  create(createUnitMeasurementDto: CreateUnitMeasurementDto) {
    const unitMeasurement = this.unitMeasurementRepository.create(
      createUnitMeasurementDto,
    );
    return this.unitMeasurementRepository.save(unitMeasurement);
  }

  async update(id: string, updateUnitMeasurementDto: UpdateUnitMeasurementDto) {
    const unitMeasurement = await this.unitMeasurementRepository.preload({
      id: id,
      ...updateUnitMeasurementDto,
    });
    if (!unitMeasurement) {
      throw new NotFoundException(
        `Unit of Measurement with id=>{${id}} not found`,
      );
    }
    return this.unitMeasurementRepository.save(unitMeasurement);
  }

  async remove(id: string) {
    const unitMeasurement = await this.findOne(id);
    return this.unitMeasurementRepository.remove(unitMeasurement);
  }
}
