import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupMembershipService } from "./groupMembership.service";
import { GroupMembershipControllerBase } from "./base/groupMembership.controller.base";

@swagger.ApiTags("groupMemberships")
@common.Controller("groupMemberships")
export class GroupMembershipController extends GroupMembershipControllerBase {
  constructor(protected readonly service: GroupMembershipService) {
    super(service);
  }
}
