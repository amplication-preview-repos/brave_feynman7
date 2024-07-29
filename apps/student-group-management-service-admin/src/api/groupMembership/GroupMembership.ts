import { Group } from "../group/Group";
import { Student } from "../student/Student";

export type GroupMembership = {
  createdAt: Date;
  group?: Group | null;
  id: string;
  student?: Student | null;
  updatedAt: Date;
};
