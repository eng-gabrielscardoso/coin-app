import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { map, lastValueFrom, Observable } from 'rxjs';

@Injectable()
export class CryptocurrenciesListService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async fetchCryptocurrenciesList() {
    const response: Observable<AxiosResponse<any>> = await lastValueFrom(
      this.httpService
        .get(this.configService.get('BASE_URL') + '/coins/list')
        .pipe(map((response) => response.data)),
    );

    return response;
  }

  async getCryptocurrenciesList() {
    return await this.fetchCryptocurrenciesList();
  }
}
