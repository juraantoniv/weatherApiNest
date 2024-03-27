import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../common/entities/base.entities';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column('text')
  name: string;

  @Column('text')
  email: string;

  @Column('text', { select: false })
  password: string;

  @Column('int')
  age: number;

  @Column('text', { nullable: true })
  city: string;
}
