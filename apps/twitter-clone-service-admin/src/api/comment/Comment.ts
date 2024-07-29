import { Tweet } from "../tweet/Tweet";

export type Comment = {
  author: string | null;
  content: string | null;
  createdAt: Date;
  id: string;
  tweet?: Tweet | null;
  updatedAt: Date;
};
