import { Product } from './product.entity';
import { UpdateProductDTO } from './update-product.dto';
import { CreateProductDTO } from './create-product.dto';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager } from 'typeorm';

@Injectable()
export class ProductsService {
  productRepository = this.entityManager.getRepository(Product);

  constructor(private readonly entityManager: EntityManager) {}

  // find all products
  async findAllProducts(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  // Get product by id
  async findProductById(productId: number): Promise<Product> {
    const productSelected = await this.productRepository.findOne({
      where: { id: productId },
      relations: { productDetails: true },
    });

    if (!productSelected) throw new NotFoundException([`There is no product with the refrence ${productId}`]);

    return productSelected;
  }

  // Create product
  async createProduct(product: CreateProductDTO) {
    const productExist = await this.productRepository.findOne({ where: { name: product.name } });

    if (productExist)
      throw new HttpException(
        `A product with name ${product.name} is already exist !`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    // perform some conversion options before save
    product.qte = Number(product.qte);

    return await this.productRepository.save(product);
  }

  // Update product
  async updateProduct(product: UpdateProductDTO, productId: number) {
    const selectedProduct = await this.findProductById(productId);

    product.name = selectedProduct.name;
    product.price = selectedProduct.price;
    product.qte = selectedProduct.qte;

    return await this.productRepository.save(product);
  }

  // Delete product
  async deleteProduct(productId: number) {
    const productSelected = await this.findProductById(productId);

    return await this.productRepository.remove(productSelected);
  }
}
