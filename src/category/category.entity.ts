import { PrimaryGeneratedColumn, Entity, Column, ManyToMany } from 'typeorm';
import { Question } from './../question/question.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  nom: string;
  @ManyToMany(() => Question, (question) => question.categories)
  questions: Question[];
}
