import * as graphql from "@nestjs/graphql";
import { AnswerOptionResolverBase } from "./base/answerOption.resolver.base";
import { AnswerOption } from "./base/AnswerOption";
import { AnswerOptionService } from "./answerOption.service";

@graphql.Resolver(() => AnswerOption)
export class AnswerOptionResolver extends AnswerOptionResolverBase {
  constructor(protected readonly service: AnswerOptionService) {
    super(service);
  }
}
