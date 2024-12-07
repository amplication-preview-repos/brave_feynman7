import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupMembershipListRelationFilter } from "../groupMembership/GroupMembershipListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type GroupWhereInput = {
  description?: StringNullableFilter;
  groupMemberships?: GroupMembershipListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
