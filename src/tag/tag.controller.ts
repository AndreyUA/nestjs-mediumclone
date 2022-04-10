import { Controller, Get } from '@nestjs/common';

// Services
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): Array<string> {
    return this.tagService.findAll();
  }
}
