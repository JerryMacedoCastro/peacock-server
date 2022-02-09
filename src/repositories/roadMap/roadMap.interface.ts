import Teacher from "../teacher/teacher.entity";
import TeachingPlatform from "../teachingPlatform/teachingPlatform.entity";
import TeachingStage from "../teachingStage/teachingStage.entity";
import TeachingStrategy from "../teachingStrategy/teachingStrategy.entity";
import Tools from "../tools/tools.entity";

interface IRoadMap {
  id: bigint;
  teachingPlatform: TeachingPlatform;
  teachingStage: TeachingStage;
  teachingStrategy: TeachingStrategy;
  tools: Tools;
  numberOfStudents: number;
  studentAgeMin: number[];
  teacher: Teacher;
}

export default IRoadMap;
