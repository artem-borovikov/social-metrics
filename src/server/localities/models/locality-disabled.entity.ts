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
export class LocalityDisabled {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: 0
    })
    count1: number;

    @Column({
        default: 0
    })
    count2: number;

    @Column({
        default: 0
    })
    count3: number;

    @Column({
        default: 0
    })
    countChildren: number;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Locality, (locality) => locality.disabled)
    @JoinColumn({
        name: 'localityId',
    })
    locality: Locality;
}
