import { AnswerOptionUpdateManyWithoutMcqsInput } from "./AnswerOptionUpdateManyWithoutMcqsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentAnswerUpdateManyWithoutMcqsInput } from "./StudentAnswerUpdateManyWithoutMcqsInput";

export type McqUpdateInput = {
  answerOptions?: AnswerOptionUpdateManyWithoutMcqsInput;
  course?: CourseWhereUniqueInput | null;
  question?: string | null;
  studentAnswers?: StudentAnswerUpdateManyWithoutMcqsInput;
};
