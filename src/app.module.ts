import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
