import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { McqServiceBase } from "./base/mcq.service.base";

@Injectable()
export class McqService extends McqServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
