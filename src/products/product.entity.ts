import { ProductDetail } from './../product-detail/product-detail.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 60, unique: true })
  name: string;
  @Column({ nullable: false })
  qte: number;
  @Column({ nullable: false })
  price: number;

  @OneToOne(() => ProductDetail, (productDetails) => productDetails.product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'productdetails-id' })
  productDetails: ProductDetail;
}
