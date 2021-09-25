import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalitiesService } from './localities.service';
import { LocalityUnemployed } from './models/locality-unemployed.entity';
import { Locality } from './models/locality.entity';
import { LocalityPopulation } from './models/locality-population.entity';
import { LocalityController } from './locality.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Locality,
      LocalityUnemployed,
      LocalityPopulation,
    ]),
  ],
  providers: [LocalitiesService],
  controllers: [LocalityController],
})
export class LocalitiesModule {}
