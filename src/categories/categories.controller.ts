import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll() {
    return `This action returns all categories`;
  }
}
