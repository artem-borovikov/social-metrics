import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {HttpModule} from "@nestjs/axios";

@Module({

    imports: [
        TypeOrmModule.forRoot(),
        HttpModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
