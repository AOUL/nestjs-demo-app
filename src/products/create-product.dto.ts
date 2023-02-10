import { IsString, Length, IsInt, IsNotEmpty } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @Length(5, 50)
  name: string;
  @IsInt({ message: 'The quantity must be an integer' })
  qte: number;
  @IsNotEmpty()
  price: number;
}
