import { CategoryService } from './../category/category.service';
import { Question } from './question.entity';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateQuestionDTO } from './create-question.dto';

@Injectable()
export class QuestionService {
  private questionRepository = this.entityManger.getRepository(Question);

  constructor(private readonly entityManger: EntityManager, private categoryService: CategoryService) {}

  // find all questions
  async findAll() {
    return await this.questionRepository.find();
  }

  // Create question
  async createQuestion(questionDTO: CreateQuestionDTO, categoryId: number) {
    const category = await this.categoryService.findOneById(categoryId);

    return await this.questionRepository.save({ ...questionDTO, categories: [category] });
  }
}
