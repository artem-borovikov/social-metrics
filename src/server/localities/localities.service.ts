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
               population.*,
               lu.count as "unemployedCount",


               --              Скор на Детей
               (
                 CASE
                   WHEN population."childrenCount"::real / (population."populationCount"::real / 100) >= 2
                   THEN 3
               WHEN lu.count::real / (population."childrenCount"::real / 100) >= 1.5
                   THEN 2
               ELSE 1
               END
                 )    as "childrenScore",
               
--              Скор на безработицу
               (
                   CASE
                       WHEN lu.count::real / (population."populationCount"::real / 100) >= 1.6
                   THEN 3
               WHEN lu.count::real / (population."populationCount"::real / 100) >= 1.1
                   THEN 2
               ELSE 1
               END
                   )    as "unemployedScore",
-- Разводы
               (
                   CASE
                       WHEN population."divorcesCount"::real / (population."populationCount"::real / 100) >= 0.3
                   THEN 3
               WHEN population."divorcesCount"::real / (population."populationCount"::real / 100) >= 0.25
                   THEN 2
               ELSE 1
               END
                   )    as "divorcesScore",
-- Дети вне брака
               (
                   CASE
                       WHEN population."bornOutOfWedlockCount"::real / (population."populationCount"::real / 100) >= 0.35
                   THEN 3
               WHEN population."bornOutOfWedlockCount"::real / (population."populationCount"::real / 100) >= 0.2
                   THEN 2
               ELSE 1
               END
                   )    as "bornOutOfWedlockScore",
--        Смерти
               (
                   CASE
                       WHEN population."deathsCount"::real / (population."populationCount"::real / 100) >= 2
                   THEN 3
               WHEN population."deathsCount"::real / (population."populationCount"::real / 100) >= 1.5
                   THEN 2
               ELSE 1
               END
                   )    as "deathsScore",
--        Инвалиды
               (
                   CASE
                       WHEN population."disabledCount"::real / (population."populationCount"::real / 100) >= 10
                   THEN 3
               WHEN population."disabledCount"::real / (population."populationCount"::real / 100) >= 6
                   THEN 2
               ELSE 1
               END
                   )    as "disabledScore",
               (
                   CASE
                       WHEN population."largeFamiliesCount"::real / (population."populationCount"::real / 100) >= 2
                   THEN 3
               WHEN population."largeFamiliesCount"::real / (population."populationCount"::real / 100) >= 1.5
                   THEN 2
               ELSE 1
               END
                   )    as "largeFamiliesScore",


               (
                   CASE
                       WHEN population."poorLargeFamiliesCount"::real / (population."populationCount"::real / 100) >= 2
                   THEN 3
               WHEN population."poorLargeFamiliesCount"::real / (population."populationCount"::real / 100) >= 1.4
                   THEN 2
               ELSE 1
               END
                   )    as "poorLargeFamiliesScore",

               (
                   CASE
                       WHEN population."singleParentFamiliesCount"::real / (population."populationCount"::real / 100) >= 3
                   THEN 3
               WHEN population."singleParentFamiliesCount"::real / (population."populationCount"::real / 100) >= 1.5
                   THEN 2
               ELSE 1
               END
                   )    as "singleParentFamiliesScore"


        from locality l

                 LEFT JOIN locality_population population ON l."localityId" = population."localityId"
                 LEFT JOIN locality_unemployed lu on l."localityId" = lu."localityId"


    `)
  }
}
