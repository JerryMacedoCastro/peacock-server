import { Column, Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import Teacher from '../teacher/teacher.entity';

@Entity({ name: "class" })
class Class {
    @PrimaryGeneratedColumn()
    public id!: bigint;

    @Column()
    public name!: string;

    @Column()
    public educationLevel!: string;

    @OneToOne(() => Teacher, (teacher: Teacher) => teacher.id)
    @JoinColumn({ name: "teacher" })
    public teacher!: Teacher;

    @Column()
    public schoolYear!: string;
}

export default Class;