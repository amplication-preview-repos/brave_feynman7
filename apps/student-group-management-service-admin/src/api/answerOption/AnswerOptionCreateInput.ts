import { McqWhereUniqueInput } from "../mcq/McqWhereUniqueInput";

export type AnswerOptionCreateInput = {
  isCorrect?: boolean | null;
  mcq?: McqWhereUniqueInput | null;
  text?: string | null;
};
