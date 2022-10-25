import { SidebarService } from './sidebar.service';
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
import { CreateSidebarDto } from './dto/create-sidebar.dto';
import { UpdateSidebarDto } from './dto/update-sidebar.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('sidebar')
export class SidebarController {
  constructor(private readonly sidebarService: SidebarService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.sidebarService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sidebarService.findOne(id);
  }

  @Post()
  create(@Body() createSidebarDto: CreateSidebarDto) {
    return this.sidebarService.create(createSidebarDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSidebarDto: UpdateSidebarDto) {
    return this.sidebarService.update(id, updateSidebarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sidebarService.remove(id);
  }
}
