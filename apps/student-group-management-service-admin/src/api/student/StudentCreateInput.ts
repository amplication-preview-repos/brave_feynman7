import { GroupMembershipCreateNestedManyWithoutStudentsInput } from "./GroupMembershipCreateNestedManyWithoutStudentsInput";
import { StudentAnswerCreateNestedManyWithoutStudentsInput } from "./StudentAnswerCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  firstName?: string | null;
  groupMemberships?: GroupMembershipCreateNestedManyWithoutStudentsInput;
  lastName?: string | null;
  studentAnswers?: StudentAnswerCreateNestedManyWithoutStudentsInput;
};
