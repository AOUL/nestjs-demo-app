import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDTO {
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Length(8, 20, { message: 'Password length must be between 8 and 20 characters !' })
  password: string;
}
