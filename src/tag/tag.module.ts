import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Controllers
import { TagController } from '@app/tag/tag.controller';

// Services
import { TagService } from '@app/tag/tag.service';

// Entities
import { TagEntity } from '@app/tag/tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TagEntity])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
