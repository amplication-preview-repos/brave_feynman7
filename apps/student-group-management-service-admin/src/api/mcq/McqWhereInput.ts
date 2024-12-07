import { AnswerOptionListRelationFilter } from "../answerOption/AnswerOptionListRelationFilter";
import { CourseWhereUniqueInput } from "../course/CourseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentAnswerListRelationFilter } from "../studentAnswer/StudentAnswerListRelationFilter";

export type McqWhereInput = {
  answerOptions?: AnswerOptionListRelationFilter;
  course?: CourseWhereUniqueInput;
  id?: StringFilter;
  question?: StringNullableFilter;
  studentAnswers?: StudentAnswerListRelationFilter;
};
