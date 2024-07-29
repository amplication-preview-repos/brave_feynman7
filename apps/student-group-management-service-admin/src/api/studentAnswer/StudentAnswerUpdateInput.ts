import { McqWhereUniqueInput } from "../mcq/McqWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type StudentAnswerUpdateInput = {
  answerDate?: Date | null;
  mcq?: McqWhereUniqueInput | null;
  selectedOption?: string | null;
  student?: StudentWhereUniqueInput | null;
};
