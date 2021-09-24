import {PersonsService} from "./persons.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Person} from "./persons.entity";
import {Module} from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    providers: [PersonsService],
})
export class PersonsModule {}
