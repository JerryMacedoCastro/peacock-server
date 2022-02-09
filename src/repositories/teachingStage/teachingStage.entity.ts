import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import ITeachingStage from './teachingStage.interface';

@Entity()
class TeachingStage implements ITeachingStage {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column({
        type: "boolean",
    })
    public kindergarten!: boolean;

    @Column({
        type: "boolean",
    })
    public elementarySchool1!: boolean;

    @Column({
        type: "boolean",
    })
    public elementarySchool2!: boolean;

    @Column({
        type: "boolean",
    })
    public highSchool!: boolean;

    @Column({
        type: "boolean",
    })
    public vocationalEducation!: boolean;

    @Column({
        type: "boolean",
    })
    public universityGraduate!: boolean;

    @Column({
        type: "boolean",
    })
    public postgraduate!: boolean;

    @Column({
        type: "boolean",
    })
    public nonFormalTeaching!: boolean;
}

export default TeachingStage;