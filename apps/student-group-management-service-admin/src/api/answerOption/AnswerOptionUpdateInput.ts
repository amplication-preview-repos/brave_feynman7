import { McqWhereUniqueInput } from "../mcq/McqWhereUniqueInput";

export type AnswerOptionUpdateInput = {
  isCorrect?: boolean | null;
  mcq?: McqWhereUniqueInput | null;
  text?: string | null;
};
