import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Price } from './entities/price.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(Price)
    private readonly priceRepository: Repository<Price>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.priceRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const price = await this.priceRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!price) {
      throw new NotFoundException(`Price #${id} not found`);
    }
    return price;
  }

  create(createPriceDto: CreatePriceDto) {
    const price = this.priceRepository.create(createPriceDto);
    return this.priceRepository.save(price);
  }

  async update(id: string, updatePriceDto: UpdatePriceDto) {
    const price = await this.priceRepository.preload({
      id: id,
      ...updatePriceDto,
    });
    if (!price) {
      throw new NotFoundException(`Price #${id} not found`);
    }
    return this.priceRepository.save(price);
  }

  async remove(id: string) {
    const price = await this.findOne(id);
    return this.priceRepository.remove(price);
  }
}
