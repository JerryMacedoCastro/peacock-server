import Class from "../class/class.entity";
interface ITeacher {
  id: string;
  name: string;
  email: string;
  genre: string;
  birthDate: Date;
  nationality: string;
  state: string;
  city: string;
  teachingTime: string;
  academicEducation: string;
  classes: Class[];
}

export default ITeacher;
