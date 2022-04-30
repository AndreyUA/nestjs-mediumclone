import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

// Modules
import { TagModule } from '@app/tag/tag.module';
import { UserModule } from './user/user.module';

// Configs
import { ormConfig } from './ormConfig';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(ormConfig()),
    TagModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
