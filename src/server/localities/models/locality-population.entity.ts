import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Locality } from './locality.entity';

@Entity()
export class LocalityPopulation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  populationCount: number;

  @Column({
    nullable: true,
  })
  childrenCount: number;

  @Column({
    nullable: true,
  })
  divorcesCount: number;

  @Column({
    nullable: true,
  })
  familiesCount: number;

  @Column({
    nullable: true,
  })
  bornOutOfWedlockCount: number;

  @Column({
    nullable: true,
  })
  deathsCount: number;

  @Column({
    nullable: true,
  })
  disabledCount: number;

  @Column({
    nullable: true,
  })
  largeFamiliesCount: number;

  @Column({
    nullable: true,
  })
  poorLargeFamiliesCount: number;

  @Column({
    nullable: true,
  })
  singleParentFamiliesCount: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Locality, (locality) => locality.population)
  @JoinColumn({
    name: 'localityId',
  })
  locality: Locality;
}
