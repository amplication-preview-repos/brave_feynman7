import { Mcq } from "../mcq/Mcq";
import { Student } from "../student/Student";

export type StudentAnswer = {
  answerDate: Date | null;
  createdAt: Date;
  id: string;
  mcq?: Mcq | null;
  selectedOption: string | null;
  student?: Student | null;
  updatedAt: Date;
};
