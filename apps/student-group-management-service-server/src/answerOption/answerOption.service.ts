import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnswerOptionServiceBase } from "./base/answerOption.service.base";

@Injectable()
export class AnswerOptionService extends AnswerOptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
