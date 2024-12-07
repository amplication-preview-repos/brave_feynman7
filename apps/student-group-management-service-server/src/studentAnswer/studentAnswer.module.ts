import { Module } from "@nestjs/common";
import { StudentAnswerModuleBase } from "./base/studentAnswer.module.base";
import { StudentAnswerService } from "./studentAnswer.service";
import { StudentAnswerController } from "./studentAnswer.controller";
import { StudentAnswerResolver } from "./studentAnswer.resolver";

@Module({
  imports: [StudentAnswerModuleBase],
  controllers: [StudentAnswerController],
  providers: [StudentAnswerService, StudentAnswerResolver],
  exports: [StudentAnswerService],
})
export class StudentAnswerModule {}
