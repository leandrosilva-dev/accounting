import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entry } from 'src/entity/entry.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EntryService {
  constructor(
    @InjectRepository(Entry) private entryRepository: Repository<Entry>,
  ) {}

  getHello(): string {
    return `'It's me, Entry!'`;
  }
}
