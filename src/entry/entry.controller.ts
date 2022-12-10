import { Controller, Get } from '@nestjs/common';
import { EntryService } from './entry.service';

@Controller('entry')
export class EntryController {
  constructor(private entryService: EntryService) {}

  @Get()
  getHello(): string {
    return this.entryService.getHello();
  }
}
