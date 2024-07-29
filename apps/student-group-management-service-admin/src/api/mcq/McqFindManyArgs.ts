import { McqWhereInput } from "./McqWhereInput";
import { McqOrderByInput } from "./McqOrderByInput";

export type McqFindManyArgs = {
  where?: McqWhereInput;
  orderBy?: Array<McqOrderByInput>;
  skip?: number;
  take?: number;
};
