import { GroupMembershipWhereInput } from "./GroupMembershipWhereInput";
import { GroupMembershipOrderByInput } from "./GroupMembershipOrderByInput";

export type GroupMembershipFindManyArgs = {
  where?: GroupMembershipWhereInput;
  orderBy?: Array<GroupMembershipOrderByInput>;
  skip?: number;
  take?: number;
};
