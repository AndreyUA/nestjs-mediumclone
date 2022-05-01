import { Body, Controller, Post } from '@nestjs/common';

// Services
import { UserService } from '@app/user/user.service';

// Types
import { CreateUserDto } from '@app/user/dto/createUser.dto';
import { UserResponseProps } from '@app/user/types/userResponce.intergace';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('users')
  async createUser(
    @Body('user') createUserDto: CreateUserDto,
  ): Promise<UserResponseProps> {
    const user = await this.userService.createUser(createUserDto);

    return this.userService.buildUserResponse(user);
  }
}
