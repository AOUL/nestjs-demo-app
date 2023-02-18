import { CategoryModule } from './../category/category.module';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), CategoryModule],
  controllers: [QuestionController],
  providers: [QuestionService],
})
export class QuestionModule {}
