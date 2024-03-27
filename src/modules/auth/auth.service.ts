import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user.request.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UserRepository } from '../../repositories/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createAuthDto: CreateUserRequestDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: createAuthDto.email,
      },
    });

    if (user) {
      throw new BadRequestException('User already exist with this email');
    }
    const hashedPassword = await bcrypt.hash(createAuthDto.password, 5);

    await this.userRepository.save(
      this.userRepository.create({
        ...createAuthDto,
        password: hashedPassword,
      }),
    );
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
