import {NextPage} from "next";
import Link from "next/link";

import { Post } from "../../types/types";

interface Props {
  post: Post
}

export const PostCard: NextPage<Props> = ({ post }) => {
  return (
    <div className="post">
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <Link href={`/posts/${post.id}`}>
        <a>Go check Post</a>
      </Link>
      <h1>----------------</h1>
    </div>
  );
}