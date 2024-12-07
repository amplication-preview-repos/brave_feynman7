import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { McqWhereUniqueInput } from "../mcq/McqWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnswerOptionWhereInput = {
  id?: StringFilter;
  isCorrect?: BooleanNullableFilter;
  mcq?: McqWhereUniqueInput;
  text?: StringNullableFilter;
};
