import Teacher from "../teacher/teacher.entity";

interface IClass {
  id: string;
  name: string;
  educationLevel: string;
  teacher: Teacher;
  schoolYear: string;
}

export default IClass;
