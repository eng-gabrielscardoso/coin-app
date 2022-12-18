import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CryptocurrencyDetailsService } from './cryptocurrency-details.service';

@Module({
  imports: [HttpModule],
  providers: [CryptocurrencyDetailsService],
})
export class CryptocurrencyDetailsModule {}
