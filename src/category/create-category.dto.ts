import { Length } from 'class-validator';

export class CreateCategoryDTO {
  @Length(4, 50)
  nom: string;
}
