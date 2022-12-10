import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Account } from 'src/entity/account.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account) private accountRepository: Repository<Account>,
  ) {}

  find(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  async save(account: Account): Promise<void> {
    console.log('Posting');
    this.accountRepository.save(account);
  }
}
