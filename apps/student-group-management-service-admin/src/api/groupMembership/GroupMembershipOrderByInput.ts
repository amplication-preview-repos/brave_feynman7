import { SortOrder } from "../../util/SortOrder";

export type GroupMembershipOrderByInput = {
  createdAt?: SortOrder;
  groupId?: SortOrder;
  id?: SortOrder;
  studentId?: SortOrder;
  updatedAt?: SortOrder;
};
