import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class Entry {
  constructor(
    @InjectRepository(Entry) private entryRepository: Repository<Entry>,
  ) {}
}
