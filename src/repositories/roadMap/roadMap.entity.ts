import { Column, OneToOne, PrimaryGeneratedColumn, JoinColumn, Entity } from 'typeorm';

import TeachingPlatform from '../teachingPlatform/teachingPlatform.entity';
import TeachingStage from '../teachingStage/teachingStage.entity';
import TeachingStrategy from '../teachingStrategy/teachingStrategy.entity';
import Tools from '../tools/tools.entity';
import Teacher from '../teacher/teacher.entity';
import IRoadMap from './roadMap.interface';

@Entity()
class RoadMap implements IRoadMap {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @OneToOne(() => TeachingPlatform, (teachingPlatform: TeachingPlatform) => teachingPlatform.id)
    public teachingPlatform!: TeachingPlatform;

    @OneToOne(() => TeachingStage, (teachingStage: TeachingStage) => teachingStage.id)
    public teachingStage!: TeachingStage;

    @OneToOne(() => TeachingStrategy, (teachingStrategy: TeachingStrategy) => teachingStrategy.id)
    public teachingStrategy!: TeachingStrategy;

    @OneToOne(() => Tools, (tools: Tools) => tools.id)
    public tools!: Tools;

    @Column()
    public numberOfStudents!: number;

    @Column("int", { array: true })
    public studentAgeMin!: number[];

    @OneToOne(() => Teacher, (teacher: Teacher) => teacher.id)
    public teacher!: Teacher;
}

export default RoadMap;