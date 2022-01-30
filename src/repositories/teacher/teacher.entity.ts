import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Class from "../class/class.entity";
import ITeacher from "./teacher.interface";

@Entity()
class Teacher implements ITeacher {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  genre: string;

  @Column()
  birthDate: Date;

  @Column()
  nationality: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  teachingTime: string;

  @Column()
  academicEducation: string;

  @OneToMany(() => Class, (classRoom) => classRoom.teacher)
  classes: Class[];
}

export default Teacher;
