import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentCreateInput = {
  author?: string | null;
  content?: string | null;
  tweet?: TweetWhereUniqueInput | null;
};
