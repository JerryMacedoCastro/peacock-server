import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Class from "../class/class.entity";

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
  public state!: string;

  @Column()
  public city!: string;

  @Column()
  public teachingTime!: string;

  @Column()
  public academicEducation!: string;

  @OneToMany(() => Class, (classRoom) => classRoom.teacher)
  classes: Class[];
}

export default Teacher;
