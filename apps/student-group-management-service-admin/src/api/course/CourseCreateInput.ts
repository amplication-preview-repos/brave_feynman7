import { McqCreateNestedManyWithoutCoursesInput } from "./McqCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  description?: string | null;
  mcqs?: McqCreateNestedManyWithoutCoursesInput;
  name?: string | null;
};
