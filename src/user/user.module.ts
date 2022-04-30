import { Module } from '@nestjs/common';

// Controllers
import { UserController } from './user.controller';

// Services
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
