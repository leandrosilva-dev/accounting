import { Body, Controller, Post } from '@nestjs/common';
import { Account } from 'src/entity/account.entity';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Post()
  async save(@Body() account: Account) {
    await this.accountService.save(account);
  }
}
