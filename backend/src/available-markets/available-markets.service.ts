import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class AvailableMarketsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async fetchAvailableMarkets(fiatCurrency: string) {
    const response: Observable<AxiosResponse<any>> = await lastValueFrom(
      this.httpService
        .get(
          this.configService.get('BASE_URL') +
            `/coins/markets?vs_currency=${fiatCurrency}`,
        )
        .pipe(map((response) => response.data)),
    );

    return response;
  }

  async getAvailableMarkets(fiatCurrency: string) {
    return await this.fetchAvailableMarkets(fiatCurrency);
  }
}
