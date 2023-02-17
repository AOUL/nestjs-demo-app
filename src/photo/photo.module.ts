import { UserModule } from './../user/user.module';
import { PhotoService } from './photo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Photo } from './photo.entity';
import { PhotoController } from './photo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), UserModule],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
