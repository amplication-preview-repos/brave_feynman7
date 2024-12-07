import { McqUpdateManyWithoutCoursesInput } from "./McqUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  description?: string | null;
  mcqs?: McqUpdateManyWithoutCoursesInput;
  name?: string | null;
};
