import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { McqWhereUniqueInput } from "../mcq/McqWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type StudentAnswerWhereInput = {
  answerDate?: DateTimeNullableFilter;
  id?: StringFilter;
  mcq?: McqWhereUniqueInput;
  selectedOption?: StringNullableFilter;
  student?: StudentWhereUniqueInput;
};
