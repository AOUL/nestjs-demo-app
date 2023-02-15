import { ProductDetailsModule } from './../product-detail/product-details.module';
import { Product } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product]), ProductDetailsModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
