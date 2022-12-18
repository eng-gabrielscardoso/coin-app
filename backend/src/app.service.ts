import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly author: string = 'Gabriel Santos Cardoso';

  constructor(private readonly configService: ConfigService) {}

  async fetchStatus() {
    return JSON.stringify({
      running: true,
      author: this.author,
    });
  }

  async getStatus() {
    return this.fetchStatus();
  }
}
