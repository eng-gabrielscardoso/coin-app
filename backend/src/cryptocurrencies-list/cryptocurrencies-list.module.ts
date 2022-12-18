import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CryptocurrenciesListService } from './cryptocurrencies-list.service';

@Module({
  imports: [HttpModule],
  providers: [CryptocurrenciesListService],
})
export class CryptocurrenciesListModule {}
