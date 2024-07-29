import { Module } from "@nestjs/common";
import { GroupMembershipModuleBase } from "./base/groupMembership.module.base";
import { GroupMembershipService } from "./groupMembership.service";
import { GroupMembershipController } from "./groupMembership.controller";
import { GroupMembershipResolver } from "./groupMembership.resolver";

@Module({
  imports: [GroupMembershipModuleBase],
  controllers: [GroupMembershipController],
  providers: [GroupMembershipService, GroupMembershipResolver],
  exports: [GroupMembershipService],
})
export class GroupMembershipModule {}
