import { CryptocurrencyDetailsService } from './cryptocurrency-details.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('details')
export class CryptocurrencyDetailsController {
  constructor(
    private readonly cryptocurrencyDetailsService: CryptocurrencyDetailsService,
  ) {}

  @Get(':cryptocurrency')
  getCryptocurrencyDetails(@Param('cryptocurrency') cryptocurrency: string) {
    return this.cryptocurrencyDetailsService.getCryptocurrencyDetails(
      cryptocurrency,
    );
  }
}
