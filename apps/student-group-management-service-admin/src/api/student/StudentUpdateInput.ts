import { GroupMembershipUpdateManyWithoutStudentsInput } from "./GroupMembershipUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  groupMemberships?: GroupMembershipUpdateManyWithoutStudentsInput;
  lastName?: string | null;
};
