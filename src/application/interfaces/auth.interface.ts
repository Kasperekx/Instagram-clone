import { UserEntity } from 'src/infrastracture/entities/User/User.entity';
import { CreateUserDto } from 'src/presenters/dtos/create-user.dto';

export interface IAuth {
  create(userDto: CreateUserDto): Promise<UserEntity>;
}
