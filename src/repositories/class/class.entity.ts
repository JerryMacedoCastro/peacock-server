import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Teacher from "../teacher/teacher.entity";

@Entity({ name: "class" })
class Class {
  @PrimaryGeneratedColumn()
  id: bigint;

  @Column()
  name: string;

  @Column()
  educationLevel!: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes, {
    nullable: false,
  })
  teacher: Teacher;

  @Column()
  schoolYear!: string;
}

export default Class;
