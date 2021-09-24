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
export class LocalityMigration {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    count: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Locality, (locality) => locality.migration)
    @JoinColumn({
        name: 'localityId',
    })
    locality: Locality;
}
