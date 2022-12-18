import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AvailableMarketsService } from './available-markets.service';

@Module({
  imports: [HttpModule],
  providers: [AvailableMarketsService],
})
export class AvailableMarketsModule {}
