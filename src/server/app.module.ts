import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { LocalitiesModule } from './localities/localities.module';

@Module({
  imports: [TypeOrmModule.forRoot(), HttpModule, LocalitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
