import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: "teacher" })
class Teacher {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column()
    public name!: string;

    @Column()
    public email!: string;

    @Column()
    public genre!: string;

    @Column()
    public birthDate!: Date;

    @Column()
    public nationality!: string;

    @Column()
    public estate!: string;

    @Column()
    public city!: string;

    @Column()
    public teachingTime!: string;

    @Column()
    public academicEducation!: string;
}

export default Teacher;