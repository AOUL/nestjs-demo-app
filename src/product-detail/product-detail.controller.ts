import { ProductDetailsService } from './product-details.service';
import { CreateProductDetailsDTO } from './create-product-details.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('product-details')
export class ProductDetailController {
  constructor(private readonly productDetailsService: ProductDetailsService) {}

  // find all
  @Get('find/all')
  findAll() {
    return this.productDetailsService.findAll();
  }

  @Post('create')
  createProductDetail(@Body() productDetailsInput: CreateProductDetailsDTO) {
    return this.productDetailsService.createProductDetail(productDetailsInput);
  }
}
