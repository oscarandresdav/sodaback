import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeProductsController } from './typeProducts.controller';
import { TypeProductsService } from './typeProducts.service';
import { TypeProduct } from './entities/typeProduct.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeProduct])],
  controllers: [TypeProductsController],
  providers: [TypeProductsService],
})
export class TypeProductsModule {}
