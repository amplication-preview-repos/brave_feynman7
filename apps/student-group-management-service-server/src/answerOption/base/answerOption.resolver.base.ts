/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AnswerOption } from "./AnswerOption";
import { AnswerOptionCountArgs } from "./AnswerOptionCountArgs";
import { AnswerOptionFindManyArgs } from "./AnswerOptionFindManyArgs";
import { AnswerOptionFindUniqueArgs } from "./AnswerOptionFindUniqueArgs";
import { CreateAnswerOptionArgs } from "./CreateAnswerOptionArgs";
import { UpdateAnswerOptionArgs } from "./UpdateAnswerOptionArgs";
import { DeleteAnswerOptionArgs } from "./DeleteAnswerOptionArgs";
import { Mcq } from "../../mcq/base/Mcq";
import { AnswerOptionService } from "../answerOption.service";
@graphql.Resolver(() => AnswerOption)
export class AnswerOptionResolverBase {
  constructor(protected readonly service: AnswerOptionService) {}

  async _answerOptionsMeta(
    @graphql.Args() args: AnswerOptionCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AnswerOption])
  async answerOptions(
    @graphql.Args() args: AnswerOptionFindManyArgs
  ): Promise<AnswerOption[]> {
    return this.service.answerOptions(args);
  }

  @graphql.Query(() => AnswerOption, { nullable: true })
  async answerOption(
    @graphql.Args() args: AnswerOptionFindUniqueArgs
  ): Promise<AnswerOption | null> {
    const result = await this.service.answerOption(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AnswerOption)
  async createAnswerOption(
    @graphql.Args() args: CreateAnswerOptionArgs
  ): Promise<AnswerOption> {
    return await this.service.createAnswerOption({
      ...args,
      data: {
        ...args.data,

        mcq: args.data.mcq
          ? {
              connect: args.data.mcq,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AnswerOption)
  async updateAnswerOption(
    @graphql.Args() args: UpdateAnswerOptionArgs
  ): Promise<AnswerOption | null> {
    try {
      return await this.service.updateAnswerOption({
        ...args,
        data: {
          ...args.data,

          mcq: args.data.mcq
            ? {
                connect: args.data.mcq,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AnswerOption)
  async deleteAnswerOption(
    @graphql.Args() args: DeleteAnswerOptionArgs
  ): Promise<AnswerOption | null> {
    try {
      return await this.service.deleteAnswerOption(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Mcq, {
    nullable: true,
    name: "mcq",
  })
  async getMcq(@graphql.Parent() parent: AnswerOption): Promise<Mcq | null> {
    const result = await this.service.getMcq(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
