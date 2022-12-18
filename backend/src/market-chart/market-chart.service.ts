import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class MarketChartService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async fetchMarketChart(
    cryptocurrency: string,
    fiatCurrency: string,
    period: unknown,
  ) {
    const response: Observable<AxiosResponse<any>> = await lastValueFrom(
      this.httpService
        .get(
          this.configService.get('BASE_URL') +
            `/coins/${cryptocurrency}/market_chart?vs_currency=${fiatCurrency}&days=${period}`,
        )
        .pipe(map((response) => response.data)),
    );

    return response;
  }

  async getMarketChart(
    cryptocurrency: string,
    fiatCurrency: string,
    period: unknown,
  ) {
    return await this.fetchMarketChart(cryptocurrency, fiatCurrency, period);
  }
}
