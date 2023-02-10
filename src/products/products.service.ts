import { UpdateProductDTO } from './update-product.dto';
import { CreateProductDTO } from './create-product.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { product } from './product.interface';

@Injectable()
export class ProductsService {
  products: Array<product> = [
    {
      id: 1,
      name: 'Azuz probook',
      qte: 10,
      price: 55000,
    },
    {
      id: 2,
      name: 'Huawei Y8s',
      qte: 16,
      price: 2500,
    },
    {
      id: 3,
      name: 'Huawei Y8s mate',
      qte: 16,
      price: 2200,
    },
    {
      id: 4,
      name: 'Desk',
      qte: 16,
      price: 2200,
    },
  ];

  // find all products
  findAllProducts() {
    return this.products;
  }

  // Get product by id
  findProductById(productId: number) {
    const productSelected = this.products.find((product) => product.id == productId);

    if (!productSelected) throw new NotFoundException([`There is no product with the refrence ${productId}`]);

    return productSelected;
  }

  // Create product
  createProduct(product: CreateProductDTO) {
    const createdProduct = Object.assign({ id: this.products.length + 1 }, product);
    this.products.push(createdProduct);
    return createdProduct;
  }

  // Update product
  updateProduct(product: UpdateProductDTO, productId: number) {
    const selectedProduct = this.findProductById(productId);

    selectedProduct.name = product.name;
    selectedProduct.price = product.price;
    selectedProduct.qte = product.qte;
  }

  // Delete product
  deleteProduct(productId: number) {
    this.findProductById(productId);

    this.products = this.products.filter((product) => product.id != productId);
  }
}
