import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locality } from './models/locality.entity';

@Injectable()
export class LocalitiesService {
  constructor(
    @InjectRepository(Locality)
    private localityRepository: Repository<Locality>,
  ) {}

  findAll() {
    return this.localityRepository.query(`
      select l.*,
             population."populationCount",
             lu.count as "unemployedCount",
--              Скор на безработицу
             (

               CASE
                 WHEN lu.count::real / (population."populationCount"::real / 100) >= 1.6
                THEN 3
               WHEN lu.count::real / (population."populationCount"::real / 100) >= 1.1
                THEN 2
                ELSE 1
            END
               ) as "unemployedScore"


      from locality l

             LEFT JOIN locality_population population ON l."localityId" = population."localityId"
             LEFT JOIN locality_unemployed lu on l."localityId" = lu."localityId"

    `)
  }
}
