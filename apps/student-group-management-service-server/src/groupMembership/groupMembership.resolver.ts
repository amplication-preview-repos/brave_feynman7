import * as graphql from "@nestjs/graphql";
import { GroupMembershipResolverBase } from "./base/groupMembership.resolver.base";
import { GroupMembership } from "./base/GroupMembership";
import { GroupMembershipService } from "./groupMembership.service";

@graphql.Resolver(() => GroupMembership)
export class GroupMembershipResolver extends GroupMembershipResolverBase {
  constructor(protected readonly service: GroupMembershipService) {
    super(service);
  }
}
