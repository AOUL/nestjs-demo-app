import { TransformerInterceptor } from './../common/interceptors/transformer.interceptor';
import { CreateProductDTO } from './create-product.dto';
import { ProductsService } from './products.service';
import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, UseInterceptors } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('find/all')
  @UseInterceptors(TransformerInterceptor)
  findAll() {
    return this.productsService.findAllProducts();
  }

  @Get('find/:id')
  findOneById(@Param('id') productId: number) {
    return this.productsService.findProductById(productId);
  }

  @Post('create')
  createProduct(@Body() product: CreateProductDTO) {
    return this.productsService.createProduct(product);
  }

  @Put('update/:id')
  @HttpCode(200)
  updateProduct(@Body() productInput, @Param('id') productId: number) {
    return this.productsService.updateProduct(productInput, productId);
  }

  @Delete('delete/:id')
  @HttpCode(204)
  deleteProduct(@Param('id') productId: number) {
    return this.productsService.deleteProduct(productId);
  }
}
