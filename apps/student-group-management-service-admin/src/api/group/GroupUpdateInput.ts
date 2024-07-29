import { GroupMembershipUpdateManyWithoutGroupsInput } from "./GroupMembershipUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  description?: string | null;
  groupMemberships?: GroupMembershipUpdateManyWithoutGroupsInput;
  name?: string | null;
};
