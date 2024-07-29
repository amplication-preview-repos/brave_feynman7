import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  author?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  content?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
