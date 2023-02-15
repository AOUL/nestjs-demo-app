import { Product } from './../products/product.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from 'typeorm';

@Entity({ name: 'product-details' })
export class ProductDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'part-number', length: 45 })
  partNumber: string;

  @Column({ length: 45 })
  dimension: string;

  @Column({ type: 'float' })
  weight: number;

  @Column({ length: 45 })
  manufacturer: string;

  @Column({ length: 45 })
  origin: string;

  @OneToOne(() => Product, (product) => product.productDetails)
  product: Product;
}
