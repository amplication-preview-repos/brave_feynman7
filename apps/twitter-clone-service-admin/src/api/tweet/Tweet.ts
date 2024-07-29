import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type Tweet = {
  author: string | null;
  comments?: Array<Comment>;
  content: string | null;
  createdAt: Date;
  id: string;
  likes?: Array<Like>;
  updatedAt: Date;
};
