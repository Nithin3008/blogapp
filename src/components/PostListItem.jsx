import { Link } from "react-router-dom";
import { format } from "timeago.js";

function PostListItem({ post }) {
  console.log(post);
  return (
    <div>
      <div className="flex flex-col xl:flex-row gap-4 my-5">
        {post.img && (
          <img
            src={post.img}
            className="xl:w-1/3 rounded-3xl object-fill aspect-video md:hidden xl:block "
          />
        )}
        <div className="flex flex-col justify-around">
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <div className="space-x-2">
            <span className="text-sm">Wriiten by</span>
            <span className="text-blue-500 text-sm">{post.user.email}</span>
            <span className="text-sm">{post.category}</span>
            <span className="text-sm">{format(post.createdAt)}</span>
          </div>
          <p>{post.content.substring(0, 250)}...</p>
          <Link className="text-blue-600" to={`/${post.slug}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostListItem;
