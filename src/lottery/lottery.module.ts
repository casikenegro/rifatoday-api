import { Module } from '@nestjs/common';
import { LotteryService } from './lottery.service';
import { LotteryController } from './lottery.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [LotteryController],
  providers: [LotteryService],
  imports: [DatabaseModule]
})
export class LotteryModule {}
