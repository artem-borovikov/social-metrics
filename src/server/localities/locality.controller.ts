import { Controller, Get } from '@nestjs/common';
import { LocalitiesService } from './localities.service';

@Controller()
export class LocalityController {
  constructor(private readonly localitiesSerive: LocalitiesService) {}

  @Get('/localities')
  findAll() {
    return this.localitiesSerive.findAll();
  }
}
