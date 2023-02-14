import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 60 })
  name: string;
  @Column({ nullable: false })
  qte: number;
  @Column({ nullable: false })
  price: number;
}
