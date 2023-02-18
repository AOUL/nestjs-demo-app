import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDTO {
  @IsNotEmpty()
  @Length(5, 200, { message: 'The question length must be between 5 to 200 characters' })
  text: string;
}
