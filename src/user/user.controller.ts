import { Body, Controller, Post } from '@nestjs/common';

// Services
import { UserService } from '@app/user/user.service';

// Types
import { CreateUserDto } from '@app/user/dto/createUser.dto';

// Entities
import { UserEntity } from '@app/user/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }
}
