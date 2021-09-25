import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LocalityUnemployed } from './locality-unemployed.entity';
import { LocalityPopulation } from './locality-population.entity';

@Entity()
export class Locality {
  @PrimaryGeneratedColumn()
  localityId: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({
    length: 15,
  })
  shortName: string;

  @Column({
    type: 'numeric',
    precision: 9,
    scale: 6,
  })
  lat: number;

  @Column({
    type: 'numeric',
    precision: 9,
    scale: 6,
  })
  lon: number;

  @OneToMany(() => LocalityUnemployed, (unemployed) => unemployed.locality)
  unemployed: LocalityUnemployed[];

  @OneToMany(() => LocalityPopulation, (population) => population.locality)
  population: LocalityPopulation[];
}
