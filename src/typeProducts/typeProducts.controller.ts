import { TypeProductsService } from './typeProducts.service';
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
import { CreateTypeProductDto } from './dto/create-type-product.dto';
import { UpdateTypeProductDto } from './dto/update-type-product.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Controller('typeproducts')
export class TypeProductsController {
  constructor(private readonly typeProductsService: TypeProductsService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.typeProductsService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeProductsService.findOne(id);
  }

  @Post()
  create(@Body() createTypeProductDto: CreateTypeProductDto) {
    return this.typeProductsService.create(createTypeProductDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTypeProductDto: UpdateTypeProductDto,
  ) {
    return this.typeProductsService.update(id, updateTypeProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeProductsService.remove(id);
  }
}
