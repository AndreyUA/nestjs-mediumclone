import { Module } from '@nestjs/common';

// Controllers
import { TagController } from '@app/tag/tag.controller';

// Services
import { TagService } from '@app/tag/tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
