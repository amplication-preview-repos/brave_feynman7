import { GroupMembership } from "../groupMembership/GroupMembership";

export type Student = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  groupMemberships?: Array<GroupMembership>;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
