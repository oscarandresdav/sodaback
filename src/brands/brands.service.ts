import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.brandRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const brand = await this.brandRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!brand) {
      throw new NotFoundException(`Brand with id=>{${id}} not found`);
    }
    return brand;
  }

  create(createBrandDto: CreateBrandDto) {
    const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.save(brand);
  }

  async update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = await this.brandRepository.preload({
      id: id,
      ...updateBrandDto,
    });
    if (!brand) {
      throw new NotFoundException(`Brand with id=>{${id}} not found`);
    }
    return this.brandRepository.save(brand);
  }

  async remove(id: string) {
    const brand = await this.findOne(id);
    return this.brandRepository.remove(brand);
  }
}
