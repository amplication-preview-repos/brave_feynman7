import { GroupMembershipUpdateManyWithoutStudentsInput } from "./GroupMembershipUpdateManyWithoutStudentsInput";
import { StudentAnswerUpdateManyWithoutStudentsInput } from "./StudentAnswerUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  groupMemberships?: GroupMembershipUpdateManyWithoutStudentsInput;
  lastName?: string | null;
  studentAnswers?: StudentAnswerUpdateManyWithoutStudentsInput;
};
