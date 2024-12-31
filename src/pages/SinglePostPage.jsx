import Comments from "../components/Comments";
import PostMenuActions from "../components/PostMenuActions";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
  const res = await axios.get(
    `https://blogappbackend-wpn8.onrender.com/posts/${slug}`
  );
  return res.data;
};

function SinglePostPage() {
  const { slug } = useParams();
  console.log(slug);

  const { isPending, error, data } = useQuery({
    queryKey: ["post", slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;
  if (!data) return "Post not found!";
  console.log(data);
  return (
    <div>
      <div className="flex gap-2">
        <div className="lg:w-3/5 flex flex-col gap-3">
          <h1 className="text-5xl font-semibold">{data.title}</h1>
          <div className="space-x-2">
            <span className="text-sm">Wriiten by</span>
            <span className="text-blue-500 text-sm">{data.user.email}</span>
            <span className="text-sm">Web Design</span>
            <span className="text-sm">{format(data.createdAt)}</span>
          </div>
          <p>{data.description}</p>
        </div>
        {data.img ? (
          <img src={data.img} className=" hidden lg:block w-2/5 rounded-2xl" />
        ) : null}
      </div>
      <div className="flex mt-5 gap-16">
        <div className="lg:text-lg space-x-6 text-justify  w-3/4">
          <p>{data.content}</p>
        </div>
        <div>
          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
        </div>
      </div>

      <h1 className="mt-10">Comments</h1>
      <Comments postId={data._id} />
    </div>
  );
}

export default SinglePostPage;
