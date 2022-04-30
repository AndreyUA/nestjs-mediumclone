import { Injectable } from '@nestjs/common';

// Types
import { CreateUserDto } from '@app/user/dto/createUser.dto';

@Injectable()
export class UserService {
  async createUser(createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
