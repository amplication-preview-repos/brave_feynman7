import * as graphql from "@nestjs/graphql";
import { McqResolverBase } from "./base/mcq.resolver.base";
import { Mcq } from "./base/Mcq";
import { McqService } from "./mcq.service";

@graphql.Resolver(() => Mcq)
export class McqResolver extends McqResolverBase {
  constructor(protected readonly service: McqService) {
    super(service);
  }
}
