import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'photo' })
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100 })
  url: string;
  @ManyToOne(() => User, (user) => user.photos)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
