import { UpdateUserDTO } from './update.user.dto';
import { CreateUserDTO } from './create.user.dto';
import { UserService } from './user.service';
import { Controller, Post, Body, Patch, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // Create a user
  @Post('create')
  createUser(@Body() userDTO: CreateUserDTO) {
    return this.userService.createUser(userDTO);
  }

  // Update a user
  @Patch('update/:id')
  async updateUser(@Body() user: UpdateUserDTO, @Param('id') userId: number) {
    return await this.userService.updateUser(user, userId);
  }
}
