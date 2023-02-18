import { CreateCategoryDTO } from './create-category.dto';
import { Category } from './category.entity';
import { EntityManager } from 'typeorm';
import { Injectable, ConflictException } from '@nestjs/common';

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
    return await this.categoryRepository.findOne({ where: { id: categoryId }, relations: { questions: true } });
  }

  // Get one category by name
  async findOneByName(categoryName: string) {
    return await this.categoryRepository.findOne({ where: { nom: categoryName } });
  }

  // create category
  async createCategory(categoryDTO: CreateCategoryDTO) {
    const categoryExist = await this.findOneByName(categoryDTO.nom);

    if (categoryExist) throw new ConflictException([`A category called ${categoryDTO.nom} is already existed !`]);

    return await this.categoryRepository.save(categoryDTO);
  }
}
