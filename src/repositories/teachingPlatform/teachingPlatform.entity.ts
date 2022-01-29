import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "teachingPlatform" })
class TeachingPlatform {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column({
        type: "boolean",
    })
    public web!: boolean;

    @Column({
        type: "boolean",
    })
    public desktop!: boolean;

    @Column({
        type: "boolean",
    })
    public mobile!: boolean;

    @Column({
        type: "boolean",
    })
    public noPlataform!: boolean;
}

export default TeachingPlatform;