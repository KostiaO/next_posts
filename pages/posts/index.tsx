import {NextPage} from "next";
import {getPosts} from "../../api/posts";

import { PostCard } from "../../components/PostCard";

import { Post } from "../../types/types";

interface Props {
  posts: Post[]
}

console.log('hi');

const Posts: NextPage<Props> = ({ posts }) => {

  return(
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}

export default Posts;


