import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <>
      <ul className="list-none space-y-4 text-4xl font-bold mb-3">
        {posts &&
          posts.data.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`post/` + post.attributes.slug}>
                  {post.attributes.title}
                </Link>
                {post.attributes.slug}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
