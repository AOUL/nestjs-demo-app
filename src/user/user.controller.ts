import { UpdateUserDTO } from './update.user.dto';
import { CreateUserDTO } from './create.user.dto';
import { UserService } from './user.service';
import { Controller, Post, Body, Patch, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // Create a user
  @Post('create')
  async createUser(@Body() user: CreateUserDTO) {
    return await this.userService.createUser(user);
  }

  // Update a user
  @Patch('update/:id')
  async updateUser(@Body() user: UpdateUserDTO, @Param('id') userId: number) {
    return await this.userService.updateUser(user, userId);
  }
}
