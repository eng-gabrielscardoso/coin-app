import { CryptocurrenciesListService } from './cryptocurrencies-list.service';
import { Controller, Get } from '@nestjs/common';

@Controller('list')
export class CryptocurrenciesListController {
  constructor(
    private readonly cryptocurrenciesListService: CryptocurrenciesListService,
  ) {}

  @Get()
  getCryptocurrenciesList() {
    return this.cryptocurrenciesListService.getCryptocurrenciesList();
  }
}
