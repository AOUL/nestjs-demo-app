import { UserService } from './../user/user.service';
import { CreatePhotoDTO } from './create-photo.dto';
import { Photo } from './photo.entity';
import { EntityManager } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PhotoService {
  private photoRepository = this.entityManager.getRepository(Photo);

  constructor(private readonly entityManager: EntityManager, private userService: UserService) {}

  // Insert photo
  async insertPhoto(photoDTO: CreatePhotoDTO, userId: number) {
    const user = await this.userService.findUserById(userId);

    if (!user) throw new NotFoundException(['The user you are looking for is not exist !']);

    return await this.photoRepository.save({ ...photoDTO, user: user });
  }
}
