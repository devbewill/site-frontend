import Posts from "@/components/posts";
import { fetcher } from "./api/api";

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>Post list</h1>
      <Posts posts={posts} />
    </div>
  );
};

export default PostsList;

export async function getStaticProps() {
  const postsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/posts`
  );
  return {
    props: {
      posts: postsResponse,
    },
  };
}
