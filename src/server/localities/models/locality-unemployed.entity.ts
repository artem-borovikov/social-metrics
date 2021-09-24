import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {Locality} from "./locality.entity";

@Entity()
export class LocalityUnemployed {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 0
  })
  count: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Locality, (locality) => locality.unemployed)
  @JoinColumn({
    name: 'localityId',
  })
  locality: Locality;
}
