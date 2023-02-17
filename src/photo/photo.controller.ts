import { CreatePhotoDTO } from './create-photo.dto';
import { PhotoService } from './photo.service';
import { Body, Controller, Param, Post } from '@nestjs/common';

@Controller('photo')
export class PhotoController {
  constructor(private photoService: PhotoService) {}

  // Insert photo
  @Post('insert/:userid')
  insertPhoto(@Body() photoDTO: CreatePhotoDTO, @Param('userid') userId) {
    this.photoService.insertPhoto(photoDTO, userId);
  }
}
