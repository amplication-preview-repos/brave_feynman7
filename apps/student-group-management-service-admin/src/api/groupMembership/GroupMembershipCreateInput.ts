import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GroupMembershipCreateInput = {
  group?: GroupWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
