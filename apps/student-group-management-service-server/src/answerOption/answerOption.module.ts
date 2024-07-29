import { Module } from "@nestjs/common";
import { AnswerOptionModuleBase } from "./base/answerOption.module.base";
import { AnswerOptionService } from "./answerOption.service";
import { AnswerOptionController } from "./answerOption.controller";
import { AnswerOptionResolver } from "./answerOption.resolver";

@Module({
  imports: [AnswerOptionModuleBase],
  controllers: [AnswerOptionController],
  providers: [AnswerOptionService, AnswerOptionResolver],
  exports: [AnswerOptionService],
})
export class AnswerOptionModule {}
