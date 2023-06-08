import { Controller, Post } from '@nestjs/common';
import { UserService } from 'src/domain/services/user.service';

@Controller('/auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  async create(): Promise<string> {
    return this.userService.create();
  }
}
