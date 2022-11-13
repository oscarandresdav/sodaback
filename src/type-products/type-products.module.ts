import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeProductsController } from './type-products.controller';
import { TypeProductsService } from './type-products.service';
import { TypeProduct } from './entities/type-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeProduct])],
  controllers: [TypeProductsController],
  providers: [TypeProductsService],
})
export class TypeProductsModule {}
