import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { UserService } from 'src/domain/services/user.service';
import { AuthService } from './services/auth.service';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class CoreModule {}
