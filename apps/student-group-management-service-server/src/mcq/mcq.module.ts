import { Module } from "@nestjs/common";
import { McqModuleBase } from "./base/mcq.module.base";
import { McqService } from "./mcq.service";
import { McqController } from "./mcq.controller";
import { McqResolver } from "./mcq.resolver";

@Module({
  imports: [McqModuleBase],
  controllers: [McqController],
  providers: [McqService, McqResolver],
  exports: [McqService],
})
export class McqModule {}
