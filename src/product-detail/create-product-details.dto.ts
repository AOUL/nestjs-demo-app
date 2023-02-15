import { IsNotEmpty, IsString, Length, IsNumber } from 'class-validator';

export class CreateProductDetailsDTO {
  @IsNotEmpty()
  @IsString({})
  @Length(4, 45)
  partNumber: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 45)
  dimension: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsString()
  @Length(5, 45)
  manufacturer: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 45)
  origin: string;
}
