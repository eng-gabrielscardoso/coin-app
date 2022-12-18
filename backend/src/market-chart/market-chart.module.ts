import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MarketChartService } from './market-chart.service';

@Module({
  imports: [HttpModule],
  providers: [MarketChartService],
})
export class MarketChartModule {}
