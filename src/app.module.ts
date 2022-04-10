import { Module } from '@nestjs/common';

// Modules
import { TagModule } from './tag/tag.module';

@Module({
  imports: [TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
