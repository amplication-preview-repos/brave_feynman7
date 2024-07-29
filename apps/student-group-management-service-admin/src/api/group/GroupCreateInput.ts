import { GroupMembershipCreateNestedManyWithoutGroupsInput } from "./GroupMembershipCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  description?: string | null;
  groupMemberships?: GroupMembershipCreateNestedManyWithoutGroupsInput;
  name?: string | null;
};
