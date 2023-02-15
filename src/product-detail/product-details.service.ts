import { CreateProductDetailsDTO } from './create-product-details.dto';
import { Injectable } from '@nestjs/common';
import { ProductDetail } from './product-detail.entity';
import { EntityManager } from 'typeorm';

@Injectable()
export class ProductDetailsService {
  private productDetailRepository = this.entityManager.getRepository(ProductDetail);

  constructor(private readonly entityManager: EntityManager) {}

  // get product details by id
  async findById(productDetailId: number) {
    return await this.productDetailRepository.findOne({ where: { id: productDetailId } });
  }

  // Find all product details
  async findAll() {
    return await this.productDetailRepository.find();
  }

  // Create product details
  async createProductDetail(productDetails: CreateProductDetailsDTO) {
    return await this.productDetailRepository.save(productDetails);
  }
}
