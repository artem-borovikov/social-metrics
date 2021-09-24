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
export class LocalityPopulation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    populationCount: number;

    @Column({
        default: 0
    })
    divorcesCount: number;

    @Column({
        default: 0
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
