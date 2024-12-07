import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentAnswerService } from "./studentAnswer.service";
import { StudentAnswerControllerBase } from "./base/studentAnswer.controller.base";

@swagger.ApiTags("studentAnswers")
@common.Controller("studentAnswers")
export class StudentAnswerController extends StudentAnswerControllerBase {
  constructor(protected readonly service: StudentAnswerService) {
    super(service);
  }
}
