import { validationSchema } from './../core/validation';
import { configuration } from './../core/configuration';

import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AvailableMarketsController } from './available-markets/available-markets.controller';
import { AvailableMarketsModule } from './available-markets/available-markets.module';
import { AvailableMarketsService } from './available-markets/available-markets.service';

import { CryptocurrencyDetailsController } from './cryptocurrency-details/cryptocurrency-details.controller';
import { CryptocurrencyDetailsModule } from './cryptocurrency-details/cryptocurrency-details.module';
import { CryptocurrencyDetailsService } from './cryptocurrency-details/cryptocurrency-details.service';

import { CryptocurrenciesListController } from './cryptocurrencies-list/cryptocurrencies-list.controller';
import { CryptocurrenciesListModule } from './cryptocurrencies-list/cryptocurrencies-list.module';
import { CryptocurrenciesListService } from './cryptocurrencies-list/cryptocurrencies-list.service';

import { MarketChartController } from './market-chart/market-chart.controller';
import { MarketChartModule } from './market-chart/market-chart.module';
import { MarketChartService } from './market-chart/market-chart.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    AvailableMarketsModule,
    CryptocurrenciesListModule,
    CryptocurrencyDetailsModule,
    MarketChartModule,
  ],
  controllers: [
    AppController,
    AvailableMarketsController,
    CryptocurrencyDetailsController,
    CryptocurrenciesListController,
    MarketChartController,
  ],
  providers: [
    AppService,
    AvailableMarketsService,
    CryptocurrenciesListService,
    CryptocurrencyDetailsService,
    MarketChartService,
  ],
})
export class AppModule {}
