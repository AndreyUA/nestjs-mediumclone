import { Module } from '@nestjs/common';

// Controllers
import { TagController } from './tag.controller';

@Module({
  controllers: [TagController],
})
export class TagModule {}
