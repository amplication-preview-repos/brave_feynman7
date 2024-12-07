import { AnswerOptionWhereInput } from "./AnswerOptionWhereInput";
import { AnswerOptionOrderByInput } from "./AnswerOptionOrderByInput";

export type AnswerOptionFindManyArgs = {
  where?: AnswerOptionWhereInput;
  orderBy?: Array<AnswerOptionOrderByInput>;
  skip?: number;
  take?: number;
};
