import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sidebar } from './entities/sidebar.entity';
import { CreateSidebarDto } from './dto/create-sidebar.dto';
import { UpdateSidebarDto } from './dto/update-sidebar.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class SidebarService {
  constructor(
    @InjectRepository(Sidebar)
    private readonly sidebarRepository: Repository<Sidebar>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.sidebarRepository.find({
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const sidebar = await this.sidebarRepository.findOne({
      where: { id: +id },
    });
    if (!sidebar) {
      throw new NotFoundException(`Sidebar #${id} not found`);
    }
    return sidebar;
  }

  create(createSidebarDto: CreateSidebarDto) {
    const sidebar = this.sidebarRepository.create(createSidebarDto);
    return this.sidebarRepository.save(sidebar);
  }

  async update(id: string, updateSidebarDto: UpdateSidebarDto) {
    const sidebar = await this.sidebarRepository.preload({
      id: +id,
      ...updateSidebarDto,
    });
    if (!sidebar) {
      throw new NotFoundException(`Sidebar #${id} not found`);
    }
    return this.sidebarRepository.save(sidebar);
  }

  async remove(id: string) {
    const sidebar = await this.findOne(id);
    return this.sidebarRepository.remove(sidebar);
  }
}
