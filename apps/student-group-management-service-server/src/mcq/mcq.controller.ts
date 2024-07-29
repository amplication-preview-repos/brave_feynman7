import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { McqService } from "./mcq.service";
import { McqControllerBase } from "./base/mcq.controller.base";

@swagger.ApiTags("mcqs")
@common.Controller("mcqs")
export class McqController extends McqControllerBase {
  constructor(protected readonly service: McqService) {
    super(service);
  }
}
