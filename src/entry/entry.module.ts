import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entry } from 'src/entity/entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Entry])],
  providers: [],
  controllers: [],
})
export class EntryModule {}
