import { IAuth } from '../interfaces/auth.interface';
import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from 'src/domain/services/user.service';
import { UserEntity } from 'src/infrastracture/entities/User/User.entity';
import { CreateUserDto } from 'src/presenters/dtos/create-user.dto';

@Injectable()
export class AuthService implements IAuth {
  constructor(private readonly userService: UserService) {}

  async create(userDTO: CreateUserDto): Promise<UserEntity> {
    try {
      const user = await this.userService.findUserByEmail(userDTO.email);
      if (user.length > 0) {
        throw new ConflictException('User already exists');
      } else {
        return this.userService.create(userDTO);
      }
    } catch (err) {
      if (err.status === 409) {
        throw new ConflictException('User already exists');
      }
    }
  }
}
