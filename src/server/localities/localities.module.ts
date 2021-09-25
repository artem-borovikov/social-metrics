import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalitiesService } from './localities.service';
import { LocalityDisabled } from './models/locality-disabled.entity';
import { LocalityUnemployed } from './models/locality-unemployed.entity';
import { LocalityMigration } from './models/locality-migration.entity';
import { Locality } from './models/locality.entity';
import { LocalityPopulation } from './models/locality-population.entity';
import { LocalityController } from './locality.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Locality,
      LocalityDisabled,
      LocalityUnemployed,
      LocalityMigration,
      LocalityPopulation,
    ]),
  ],
  providers: [LocalitiesService],
  controllers: [LocalityController],
})
export class LocalitiesModule {}
