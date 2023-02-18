import { CreateQuestionDTO } from './create-question.dto';
import { QuestionService } from './question.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  // Find all questions
  @Get('find/all')
  findAll() {
    return this.questionService.findAll();
  }

  // Create question
  @Post('create/:category-id')
  createQuestion(@Body() questionInput: CreateQuestionDTO, @Param('category-id') categoryId: number) {
    return this.questionService.createQuestion(questionInput, categoryId);
  }
}
