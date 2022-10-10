import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    {
      id: '1',
      name: 'Teclado',
      status: true,
    },
  ];

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    const category = this.categories.find((item) => item.id === id);
    if (!category) {
      throw new NotFoundException(`Category #${id} not found`);
    }
    return category;
  }

  create(createCategoryDto: any) {
    this.categories.push(createCategoryDto);
    return createCategoryDto;
  }

  update(id: string, updateCategoryDto: any) {
    const exisitingCategory = this.findOne(id);
    if (exisitingCategory) {
      // Update the existing category
    }
  }

  remove(id: string) {
    const categoryIndex = this.categories.findIndex((item) => item.id === id);
    if (categoryIndex >= 0) {
      this.categories.splice(categoryIndex, 1);
    }
  }
}
