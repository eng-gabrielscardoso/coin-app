import { MarketChartService } from './market-chart.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('market_chart')
export class MarketChartController {
  constructor(private readonly marketChartService: MarketChartService) {}

  @Get(':cryptocurrency/:fiatCurrency/:period')
  getMarketChart(
    @Param('cryptocurrency') cryptocurrency: string,
    @Param('fiatCurrency') fiatCurrency: string,
    @Param('period') period: unknown,
  ) {
    return this.marketChartService.getMarketChart(
      cryptocurrency,
      fiatCurrency,
      period,
    );
  }
}
