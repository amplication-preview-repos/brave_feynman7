import { Mcq } from "../mcq/Mcq";

export type Course = {
  createdAt: Date;
  description: string | null;
  id: string;
  mcqs?: Array<Mcq>;
  name: string | null;
  updatedAt: Date;
};
