import { Mcq } from "../mcq/Mcq";

export type AnswerOption = {
  createdAt: Date;
  id: string;
  isCorrect: boolean | null;
  mcq?: Mcq | null;
  text: string | null;
  updatedAt: Date;
};
