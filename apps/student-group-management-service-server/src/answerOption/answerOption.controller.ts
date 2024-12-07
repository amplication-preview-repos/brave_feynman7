import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AnswerOptionService } from "./answerOption.service";
import { AnswerOptionControllerBase } from "./base/answerOption.controller.base";

@swagger.ApiTags("answerOptions")
@common.Controller("answerOptions")
export class AnswerOptionController extends AnswerOptionControllerBase {
  constructor(protected readonly service: AnswerOptionService) {
    super(service);
  }
}
