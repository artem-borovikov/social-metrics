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
  divorcesCount: number;

  @Column({
    nullable: true,
  })
  bornOutOfWedlockCount: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Locality, (locality) => locality.population)
  @JoinColumn({
    name: 'localityId',
  })
  locality: Locality;
}
