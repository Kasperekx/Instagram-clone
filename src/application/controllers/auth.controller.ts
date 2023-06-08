import { AuthService } from './../services/auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from 'src/infrastracture/entities/User/User.entity';
import { CreateUserDto } from 'src/presenters/dtos/create-user.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async create(@Body() userDTO: CreateUserDto): Promise<UserEntity> {
    return this.authService.create(userDTO);
  }
}
