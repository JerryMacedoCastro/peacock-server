import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Teacher from "../teacher/teacher.entity";
import IClass from "./class.interface";

@Entity()
export class Class implements IClass {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  educationLevel: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classes, {
    nullable: false,
  })
  teacher: Teacher;

  @Column()
  schoolYear: string;
}

export default Class;
