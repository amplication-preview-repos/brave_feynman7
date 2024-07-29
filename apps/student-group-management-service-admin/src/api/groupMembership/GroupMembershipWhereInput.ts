import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StudentWhereUniqueInput } from "../student/StudentWhereUniqueInput";

export type GroupMembershipWhereInput = {
  group?: GroupWhereUniqueInput;
  id?: StringFilter;
  student?: StudentWhereUniqueInput;
};
