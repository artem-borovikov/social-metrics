import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Person {
    @PrimaryColumn()
    personId: number;

    @Column(
        {
            length: 150
        }
    )
    surName: string;

    @Column(
        {
            length: 150
        }
    )
    firstName: string;

    @Column({
        length: 150,
        nullable: true,
    })
    middleName: string;
}
