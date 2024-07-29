import { SortOrder } from "../../util/SortOrder";

export type AnswerOptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isCorrect?: SortOrder;
  mcqId?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
