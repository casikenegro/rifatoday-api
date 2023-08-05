import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService],
  imports: [DatabaseModule]
})
export class TicketsModule {}
