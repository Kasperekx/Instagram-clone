import { Injectable } from '@nestjs/common';
import { UserService } from 'src/domain/services/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async create(): Promise<string> {
    return this.userService.create();
  }
}
