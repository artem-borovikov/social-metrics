import {Injectable} from "@nestjs/common";
import {HttpService} from "@nestjs/axios";

@Injectable()
export class PersonsService {
    constructor(
        private httpService: HttpService
    ) {
    }

}
