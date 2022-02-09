import { Column, PrimaryGeneratedColumn } from 'typeorm';
import ITeachingStrategy from './teachingStrategy.interface';

class TeachingStrategy implements ITeachingStrategy {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column({
        type: "boolean",
    })
    public gameDevelopment!: boolean;

    @Column({
        type: "boolean",
    })
    public robotics!: boolean;

    @Column({
        type: "boolean",
    })
    public blockProgramming!: boolean;

    @Column({
        type: "boolean",
    })
    public appDevelopment!: boolean;

    @Column({
        type: "boolean",
    })
    public unpluggedComputing!: boolean;

    @Column({
        type: "boolean",
    })
    public conventionalProgramming!: boolean;
}

export default TeachingStrategy;