import { GroupMembershipCreateNestedManyWithoutStudentsInput } from "./GroupMembershipCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  firstName?: string | null;
  groupMemberships?: GroupMembershipCreateNestedManyWithoutStudentsInput;
  lastName?: string | null;
};
