import { SortOrder } from "../../util/SortOrder";

export type StudentAnswerOrderByInput = {
  answerDate?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  mcqId?: SortOrder;
  selectedOption?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
