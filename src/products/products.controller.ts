import { ProductDetailsService } from './../product-detail/product-details.service';
import { TransformerInterceptor } from './../common/interceptors/transformer.interceptor';
import { CreateProductDTO } from './create-product.dto';
import { ProductsService } from './products.service';
import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, UseInterceptors } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly productDetailsService: ProductDetailsService,
  ) {}

  // Find all products
  @Get('find/all')
  @UseInterceptors(TransformerInterceptor)
  findAll() {
    return this.productsService.findAllProducts();
  }

  // find by id
  @Get('find/:id')
  findOneById(@Param('id') productId: number) {
    return this.productsService.findProductById(productId);
  }

  // Create product
  @Post('create')
  async createProduct(@Body() productInput: CreateProductDTO) {
    const productDetails = await this.productDetailsService.findById(1);

    if (productDetails) {
      const product = Object.assign({ productDetails: productDetails }, productInput);
      console.log(product);
      return this.productsService.createProduct(product);
    }
  }

  // Update product
  @Put('update/:id')
  @HttpCode(200)
  updateProduct(@Body() productInput, @Param('id') productId: number) {
    return this.productsService.updateProduct(productInput, productId);
  }

  // Delete product
  @Delete('delete/:id')
  @HttpCode(204)
  deleteProduct(@Param('id') productId: number) {
    return this.productsService.deleteProduct(productId);
  }
}
