import {NextPage} from "next";
import {getPost, getPosts} from "../../api/posts";

import { UseStaticPaths } from "../../hooks/static_hook";

import { Post, PathForIdPost } from "../../types/types";


interface Props {
  post: Post
}

const Post: NextPage<Props> = ({ post }) => {
  return (
    <div className="post">
      <h1>{post.id}</h1>
      {post.body}
    </div>
  );
}

export async function getStaticPaths() {
  return await UseStaticPaths<Post>(getPosts);
}

export async function getStaticProps({ params }: PathForIdPost) {
  const post = await getPost(Number(params.id));

  return {
    props: {
      post
    }
  };
}

export default Post;
