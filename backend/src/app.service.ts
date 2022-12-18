import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  async fetchStatus() {
    return 'Testing';
  }

  async getStatus() {
    return this.fetchStatus();
  }
}
