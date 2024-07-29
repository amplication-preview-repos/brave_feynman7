import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { McqListRelationFilter } from "../mcq/McqListRelationFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  mcqs?: McqListRelationFilter;
  name?: StringNullableFilter;
};
