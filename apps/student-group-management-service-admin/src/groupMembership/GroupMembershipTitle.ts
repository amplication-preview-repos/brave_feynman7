import { GroupMembership as TGroupMembership } from "../api/groupMembership/GroupMembership";

export const GROUPMEMBERSHIP_TITLE_FIELD = "id";

export const GroupMembershipTitle = (record: TGroupMembership): string => {
  return record.id?.toString() || String(record.id);
};
