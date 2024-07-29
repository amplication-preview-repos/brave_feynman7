import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentAnswerServiceBase } from "./base/studentAnswer.service.base";

@Injectable()
export class StudentAnswerService extends StudentAnswerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
