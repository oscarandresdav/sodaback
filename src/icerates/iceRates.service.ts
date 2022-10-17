import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IceRate } from './entities/iceRate.entity';
import { CreateIceRateDto } from './dto/create-ice-rate.dto';
import { UpdateIceRateDto } from './dto/update-ice-rate.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class IceRatesService {
  constructor(
    @InjectRepository(IceRate)
    private readonly iceRateRepository: Repository<IceRate>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.iceRateRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const iceRate = await this.iceRateRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!iceRate) {
      throw new NotFoundException(`Ice Rate #${id} not found`);
    }
    return iceRate;
  }

  create(createIceRateDto: CreateIceRateDto) {
    const iceRate = this.iceRateRepository.create(createIceRateDto);
    return this.iceRateRepository.save(iceRate);
  }

  async update(id: string, updateIceRateDto: UpdateIceRateDto) {
    const iceRate = await this.iceRateRepository.preload({
      id: id,
      ...updateIceRateDto,
    });
    if (!iceRate) {
      throw new NotFoundException(`Ice Rate #${id} not found`);
    }
    return this.iceRateRepository.save(iceRate);
  }

  async remove(id: string) {
    const iceRate = await this.findOne(id);
    return this.iceRateRepository.remove(iceRate);
  }
}
