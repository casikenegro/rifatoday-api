import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LotteryModule } from './lottery/lottery.module';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { DatabaseModule } from './database/database.module';
import { GoogleStrategy } from './auth/google.strategy';
import { FacebookStrategy } from './auth/facebook.strategy';
import { TwitterStrategy } from './auth/twitter.strategy';

@Module({
  imports: [LotteryModule, UsersModule, TicketsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy, FacebookStrategy, TwitterStrategy],
})
export class AppModule {}
