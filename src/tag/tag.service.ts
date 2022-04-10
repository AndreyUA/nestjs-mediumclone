import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): Array<string> {
    return ['dragon', 'coffee', 'tea'];
  }
}
