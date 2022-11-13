import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeProduct } from './entities/type-product.entity';
import { CreateTypeProductDto } from './dto/create-type-product.dto';
import { UpdateTypeProductDto } from './dto/update-type-product.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class TypeProductsService {
  constructor(
    @InjectRepository(TypeProduct)
    private readonly typeProductRepository: Repository<TypeProduct>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.typeProductRepository.find({
      relations: {
        products: true,
      },
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const typeProduct = await this.typeProductRepository.findOne({
      where: { id: id },
      relations: { products: true },
    });
    if (!typeProduct) {
      throw new NotFoundException(`Type of product #${id} not found`);
    }
    return typeProduct;
  }

  create(createTypeProductDto: CreateTypeProductDto) {
    const typeProduct = this.typeProductRepository.create(createTypeProductDto);
    return this.typeProductRepository.save(typeProduct);
  }

  async update(id: string, updateTypeProductDto: UpdateTypeProductDto) {
    const typeProduct = await this.typeProductRepository.preload({
      id: id,
      ...updateTypeProductDto,
    });
    if (!typeProduct) {
      throw new NotFoundException(`Type of product #${id} not found`);
    }
    return this.typeProductRepository.save(typeProduct);
  }

  async remove(id: string) {
    const typeProduct = await this.findOne(id);
    return this.typeProductRepository.remove(typeProduct);
  }
}
