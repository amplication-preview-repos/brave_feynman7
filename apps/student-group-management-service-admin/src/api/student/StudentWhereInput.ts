import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupMembershipListRelationFilter } from "../groupMembership/GroupMembershipListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  groupMemberships?: GroupMembershipListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
