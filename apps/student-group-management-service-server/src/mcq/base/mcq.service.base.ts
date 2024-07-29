/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Mcq as PrismaMcq,
  AnswerOption as PrismaAnswerOption,
  StudentAnswer as PrismaStudentAnswer,
  Course as PrismaCourse,
} from "@prisma/client";

export class McqServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.McqCountArgs, "select">): Promise<number> {
    return this.prisma.mcq.count(args);
  }

  async mcqs(args: Prisma.McqFindManyArgs): Promise<PrismaMcq[]> {
    return this.prisma.mcq.findMany(args);
  }
  async mcq(args: Prisma.McqFindUniqueArgs): Promise<PrismaMcq | null> {
    return this.prisma.mcq.findUnique(args);
  }
  async createMcq(args: Prisma.McqCreateArgs): Promise<PrismaMcq> {
    return this.prisma.mcq.create(args);
  }
  async updateMcq(args: Prisma.McqUpdateArgs): Promise<PrismaMcq> {
    return this.prisma.mcq.update(args);
  }
  async deleteMcq(args: Prisma.McqDeleteArgs): Promise<PrismaMcq> {
    return this.prisma.mcq.delete(args);
  }

  async findAnswerOptions(
    parentId: string,
    args: Prisma.AnswerOptionFindManyArgs
  ): Promise<PrismaAnswerOption[]> {
    return this.prisma.mcq
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .answerOptions(args);
  }

  async findStudentAnswers(
    parentId: string,
    args: Prisma.StudentAnswerFindManyArgs
  ): Promise<PrismaStudentAnswer[]> {
    return this.prisma.mcq
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .studentAnswers(args);
  }

  async getCourse(parentId: string): Promise<PrismaCourse | null> {
    return this.prisma.mcq
      .findUnique({
        where: { id: parentId },
      })
      .course();
  }
}
