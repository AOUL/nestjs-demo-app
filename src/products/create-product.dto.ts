import { IsString, Length, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @Length(5, 50)
  name: string;
  @IsNumber()
  qte: number;
  @IsNotEmpty()
  price: number;
}
