/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StudentAnswerWhereUniqueInput } from "./StudentAnswerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StudentAnswerUpdateInput } from "./StudentAnswerUpdateInput";

@ArgsType()
class UpdateStudentAnswerArgs {
  @ApiProperty({
    required: true,
    type: () => StudentAnswerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StudentAnswerWhereUniqueInput)
  @Field(() => StudentAnswerWhereUniqueInput, { nullable: false })
  where!: StudentAnswerWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StudentAnswerUpdateInput,
  })
  @ValidateNested()
  @Type(() => StudentAnswerUpdateInput)
  @Field(() => StudentAnswerUpdateInput, { nullable: false })
  data!: StudentAnswerUpdateInput;
}

export { UpdateStudentAnswerArgs as UpdateStudentAnswerArgs };
