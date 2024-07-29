import { GroupMembership } from "../groupMembership/GroupMembership";
import { StudentAnswer } from "../studentAnswer/StudentAnswer";

export type Student = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  groupMemberships?: Array<GroupMembership>;
  id: string;
  lastName: string | null;
  studentAnswers?: Array<StudentAnswer>;
  updatedAt: Date;
};
