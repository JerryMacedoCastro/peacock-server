import { Column, PrimaryGeneratedColumn } from 'typeorm';
import ITeachingPlatform from './teachingPlatform.interface';

class TeachingPlatform implements ITeachingPlatform {
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