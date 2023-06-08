import { Injectable } from '@nestjs/common';
import { IUserService } from '../interfaces/user.interface';

@Injectable()
export class UserService implements IUserService {
  async create(): Promise<string> {
    return 'This action adds a new user';
  }
}
