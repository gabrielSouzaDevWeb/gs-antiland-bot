import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AntilandMessageBotService } from './antiland-message-bot.service';
import { MainService } from './main.service';

@Module({
  imports: [
    HttpModule.register({ timeout: 50000000, maxRedirects: 5 }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [MainService, AntilandMessageBotService],
})
export class AppModule {}
