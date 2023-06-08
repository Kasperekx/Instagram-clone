import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/infrastracture/entities/User/User.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/presenters/dtos/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(userDTO: CreateUserDto): Promise<UserEntity> {
    try {
      const hashedPassword = await bcrypt.hash(userDTO.password, 10);
      const newUser = this.userRepository.create({
        ...userDTO,
        password: hashedPassword,
      });
      return this.userRepository.save(newUser);
    } catch (err) {
      throw new Error(err);
    }
  }

  async findUserById(userId: string): Promise<UserEntity[]> {
    if (!userId) throw new Error('User id is required');
    return this.userRepository.findBy({ id: userId });
  }

  async findUserByEmail(email: string): Promise<UserEntity[]> {
    if (!email) throw new Error('User email is required');
    return this.userRepository.findBy({ email: email });
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }
}
