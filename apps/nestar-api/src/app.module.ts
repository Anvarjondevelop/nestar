import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()], // nestar-api server da .env ni o'qishga imkon yaratadi
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
