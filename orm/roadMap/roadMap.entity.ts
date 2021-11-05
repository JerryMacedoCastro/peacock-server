import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';

import TeachingPlatform from '../teachingPlatform/teachingPlatform.entity';
import TeachingStage from '../teachingStage/teachingStage.entity';
import TeachingStrategy from '../teachingStrategy/teachingStrategy.entity';
import Tools from '../tools/tools.entity';
import Teacher from '../teacher/teacher.entity';

@Entity({ name: "roadMap" })
class RoadMap {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @OneToOne(() => TeachingPlatform, (teachingPlatform: TeachingPlatform) => teachingPlatform.id)
    @JoinColumn({ name: "teachingPlatform" })
    public teachingPlatform!: TeachingPlatform;

    @OneToOne(() => TeachingStage, (teachingStage: TeachingStage) => teachingStage.id)
    @JoinColumn({ name: "teachingStage" })
    public teachingStage!: TeachingStage;

    @OneToOne(() => TeachingStrategy, (teachingStrategy: TeachingStrategy) => teachingStrategy.id)
    @JoinColumn({ name: "teachingStrategy" })
    public teachingStrategy!: TeachingStrategy;

    @OneToOne(() => Tools, (tools: Tools) => tools.id)
    @JoinColumn({ name: "tools" })
    public tools!: Tools;

    @Column()
    public numberOfStudents!: number;

    @Column("int", { array: true })
    public studentAgeMin!: number[];

    @OneToOne(() => Teacher, (teacher: Teacher) => teacher.id)
    @JoinColumn({ name: "teacher" })
    public teacher!: Teacher;
}

export default RoadMap;