import { UpdateUserDTO } from './update.user.dto';
import { CreateUserDTO } from './create.user.dto';
import { EntityManager } from 'typeorm';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import * as Bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private userRepository = this.entityManager.getRepository(User);

  constructor(private readonly entityManager: EntityManager) {}

  // find user by email
  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  // find user by id
  async findUserById(userId: number) {
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  // Create a user
  async createUser(user: CreateUserDTO) {
    const userExist = this.findUserByEmail(user.email);

    if (userExist) throw new ConflictException([`the email ${user.email} is already exist !`]);

    user.password = await Bcrypt.hash(user.password, 10);

    return await this.userRepository.save(user);
  }

  // Update a user
  async updateUser(user: UpdateUserDTO, userId: number) {
    const userExist = await this.findUserById(userId);

    if (!userExist) throw new NotFoundException(['The user id is not exist !']);

    userExist.email = user.email;

    return await this.userRepository.save(userExist);
  }
}
