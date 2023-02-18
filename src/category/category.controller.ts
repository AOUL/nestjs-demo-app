import { CreateCategoryDTO } from './create-category.dto';
import { CategoryService } from './category.service';
import { Body, Controller, Get, Post, Param } from '@nestjs/common';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Find all categories
  @Get('all')
  findAll() {
    return this.categoryService.findAll();
  }

  // Find category by id
  @Get(':id')
  findCategoryById(@Param('id') categoryid: number) {
    return this.categoryService.findOneById(categoryid);
  }

  // Create category
  @Post('create')
  createCategory(@Body() categoryInput: CreateCategoryDTO) {
    return this.categoryService.createCategory(categoryInput);
  }
}
