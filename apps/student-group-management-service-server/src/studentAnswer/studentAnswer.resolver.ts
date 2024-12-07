import * as graphql from "@nestjs/graphql";
import { StudentAnswerResolverBase } from "./base/studentAnswer.resolver.base";
import { StudentAnswer } from "./base/StudentAnswer";
import { StudentAnswerService } from "./studentAnswer.service";

@graphql.Resolver(() => StudentAnswer)
export class StudentAnswerResolver extends StudentAnswerResolverBase {
  constructor(protected readonly service: StudentAnswerService) {
    super(service);
  }
}
