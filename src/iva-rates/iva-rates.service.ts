import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IvaRate } from './entities/iva-rate.entity';
import { CreateIvaRateDto } from './dto/create-iva-rate.dto';
import { UpdateIvaRateDto } from './dto/update-iva-rate.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class IvaRatesService {
  constructor(
    @InjectRepository(IvaRate)
    private readonly ivaRateRepository: Repository<IvaRate>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.ivaRateRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const ivaRate = await this.ivaRateRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!ivaRate) {
      throw new NotFoundException(`Iva Rate #${id} not found`);
    }
    return ivaRate;
  }

  create(createIvaRateDto: CreateIvaRateDto) {
    const ivaRate = this.ivaRateRepository.create(createIvaRateDto);
    return this.ivaRateRepository.save(ivaRate);
  }

  async update(id: string, updateIvaRateDto: UpdateIvaRateDto) {
    const ivaRate = await this.ivaRateRepository.preload({
      id: id,
      ...updateIvaRateDto,
    });
    if (!ivaRate) {
      throw new NotFoundException(`Iva Rate #${id} not found`);
    }
    return this.ivaRateRepository.save(ivaRate);
  }

  async remove(id: string) {
    const ivaRate = await this.findOne(id);
    return this.ivaRateRepository.remove(ivaRate);
  }
}
