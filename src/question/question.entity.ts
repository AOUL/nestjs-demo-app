import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './../category/category.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 200 })
  text: string;
  @ManyToMany(() => Category, (category) => category.questions)
  @JoinTable({ name: 'question_category' })
  categories: Category[];
}
