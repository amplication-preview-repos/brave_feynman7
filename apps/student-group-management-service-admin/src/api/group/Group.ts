import { GroupMembership } from "../groupMembership/GroupMembership";

export type Group = {
  createdAt: Date;
  description: string | null;
  groupMemberships?: Array<GroupMembership>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
