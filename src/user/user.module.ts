import { Module } from '@nestjs/common';

// Controllers
import { UserController } from '@app/user/user.controller';

// Services
import { UserService } from '@app/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
