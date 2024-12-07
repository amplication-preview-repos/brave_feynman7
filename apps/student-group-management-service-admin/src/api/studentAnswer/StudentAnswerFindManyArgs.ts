import { StudentAnswerWhereInput } from "./StudentAnswerWhereInput";
import { StudentAnswerOrderByInput } from "./StudentAnswerOrderByInput";

export type StudentAnswerFindManyArgs = {
  where?: StudentAnswerWhereInput;
  orderBy?: Array<StudentAnswerOrderByInput>;
  skip?: number;
  take?: number;
};
