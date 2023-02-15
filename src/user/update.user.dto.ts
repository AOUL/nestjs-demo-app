import { IsEmail, IsOptional } from 'class-validator';

export class UpdateUserDTO {
  @IsEmail()
  email: string;
  @IsOptional()
  password?: string;
}
