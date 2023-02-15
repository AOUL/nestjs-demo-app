import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';
import { Photo } from '../photo/photo.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 50 })
  email: string;
  @Column({ length: 100 })
  password: string;
  @OneToMany(() => Photo, (photo) => photo.user, { onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  photos: Photo[];
}
