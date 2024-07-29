import { AnswerOptionCreateNestedManyWithoutMcqsInput } from "./AnswerOptionCreateNestedManyWithoutMcqsInput";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StudentAnswerCreateNestedManyWithoutMcqsInput } from "./StudentAnswerCreateNestedManyWithoutMcqsInput";

export type McqCreateInput = {
  answerOptions?: AnswerOptionCreateNestedManyWithoutMcqsInput;
  course?: CourseWhereUniqueInput | null;
  question?: string | null;
  studentAnswers?: StudentAnswerCreateNestedManyWithoutMcqsInput;
};
