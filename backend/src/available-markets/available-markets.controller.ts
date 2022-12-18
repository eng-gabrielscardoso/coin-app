import { AvailableMarketsService } from './available-markets.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('markets')
export class AvailableMarketsController {
  constructor(
    private readonly availableMarketsService: AvailableMarketsService,
  ) {}

  @Get(':fiatCurrency')
  getAvailableMarkets(@Param('fiatCurrency') fiatCurrency: string) {
    return this.availableMarketsService.getAvailableMarkets(fiatCurrency);
  }
}
