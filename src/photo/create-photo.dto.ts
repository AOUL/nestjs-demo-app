import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreatePhotoDTO {
  @IsNotEmpty()
  @MaxLength(100, { message: 'The url should not be more than 100 characters' })
  url: string;
}
