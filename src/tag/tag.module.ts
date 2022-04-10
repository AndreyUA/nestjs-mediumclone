import { Module } from '@nestjs/common';

// Controllers
import { TagController } from './tag.controller';

// Services
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
