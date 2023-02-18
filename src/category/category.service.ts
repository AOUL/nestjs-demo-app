import { CreateCategoryDTO } from './create-category.dto';
import { Category } from './category.entity';
import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
  private categoryRepository = this.entityManager.getRepository(Category);

  constructor(private readonly entityManager: EntityManager) {}

  // Find all categories
  async findAll() {
    return await this.categoryRepository.find();
  }

  // Get one category by id
  async findOneById(categoryId: number) {
    return await this.categoryRepository.findOne({ where: { id: categoryId } });
  }

  // create category
  async createCategory(categoryDTO: CreateCategoryDTO) {
    return await this.categoryRepository.save(categoryDTO);
  }
}
