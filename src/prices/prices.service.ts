import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Price } from './entities/price.entity';
import { Repository } from 'typeorm';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class PricesService {
  constructor(
    @InjectRepository(Price)
    private readonly priceRopository: Repository<Price>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.priceRopository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }
}
