import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GroupMembershipUpdateInput = {
  group?: GroupWhereUniqueInput | null;
  student?: StudentWhereUniqueInput | null;
};
