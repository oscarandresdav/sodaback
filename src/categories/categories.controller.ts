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

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return `This action returns all categories. Limit ${limit}, offset ${offset}`;
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} category`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} category`;
  }
}
