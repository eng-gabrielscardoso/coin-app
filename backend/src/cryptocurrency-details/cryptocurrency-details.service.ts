import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class CryptocurrencyDetailsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async fetchCryptocurrencyDetails(cryptocurrency: string) {
    const response: Observable<AxiosResponse<any>> = await lastValueFrom(
      this.httpService
        .get(this.configService.get('BASE_URL') + `/coins/${cryptocurrency}`)
        .pipe(map((response) => response.data)),
    );

    return response;
  }

  async getCryptocurrencyDetails(cryptocurrency: string) {
    return await this.fetchCryptocurrencyDetails(cryptocurrency);
  }
}
