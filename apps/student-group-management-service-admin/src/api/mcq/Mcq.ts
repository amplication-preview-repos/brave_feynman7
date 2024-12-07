import { AnswerOption } from "../answerOption/AnswerOption";
import { Course } from "../course/Course";
import { StudentAnswer } from "../studentAnswer/StudentAnswer";

export type Mcq = {
  answerOptions?: Array<AnswerOption>;
  course?: Course | null;
  createdAt: Date;
  id: string;
  question: string | null;
  studentAnswers?: Array<StudentAnswer>;
  updatedAt: Date;
};
