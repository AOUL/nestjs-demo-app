import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Photo } from './photo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  controllers: [],
  providers: [],
})
export class PhotoModule {}
