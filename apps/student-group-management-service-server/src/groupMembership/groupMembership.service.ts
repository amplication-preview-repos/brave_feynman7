import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupMembershipServiceBase } from "./base/groupMembership.service.base";

@Injectable()
export class GroupMembershipService extends GroupMembershipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
