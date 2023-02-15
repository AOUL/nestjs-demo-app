import { ProductDetailsService } from './product-details.service';
import { ProductDetailController } from './product-detail.controller';
import { ProductDetail } from './product-detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ProductDetail])],
  controllers: [ProductDetailController],
  providers: [ProductDetailsService],
  exports: [ProductDetailsService],
})
export class ProductDetailsModule {}
