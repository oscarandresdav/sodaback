import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll() {
    return `This action returns all categories`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns #${id} category`;
  }

  @Post()
  create(@Body() body) {
    return body;
    // retur This action creates a category;
  }
}
