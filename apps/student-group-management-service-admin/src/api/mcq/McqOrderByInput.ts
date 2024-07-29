import { SortOrder } from "../../util/SortOrder";

export type McqOrderByInput = {
  courseId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  question?: SortOrder;
  updatedAt?: SortOrder;
};
