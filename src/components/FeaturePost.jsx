import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async () => {
  const res = await axios.get(`https://blogappbackend-wpn8.onrender.com/posts`);
  return res.data;
};
function FeaturePost() {
  const { isPending, error, data } = useQuery({
    queryKey: ["featuredPosts"],
    queryFn: () => fetchPost(),
  });

  if (isPending) return "loading...";
  if (error) return "Something went wrong!" + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    return;
  }

  return (
    <div className="flex flex-col lg:flex-row mt-8 gap-4 justify-around">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <img src={posts[0].img} className="rounded-3xl object-cover" />
        <div className="flex items-center gap-4">
          <h1>01.</h1>
          <Link className="text-blue-500">{posts[0].category}</Link>
          <span>{format(posts[0].createdAt)}</span>
        </div>
        <h1 className="text-xl font-bold">{posts[0].title}</h1>
      </div>
      <div className=" w-full lg:w-1/2 flex flex-col gap-4">
        <div className=" lg:h-1/3 flex justify-between gap-4">
          {posts[1].img && (
            <img src={posts[1].img} className="rounded-3xl object-cover" />
          )}
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>02.</h1>
              <Link className="text-blue-500">{posts[1].category}</Link>
              <span>{format(posts[1].createdAt)}</span>
            </div>
            <h1 className="text-xl font-bold">{posts[1].title}</h1>
            {!posts[1].img && <p>{posts[1].description.substring(0, 250)}</p>}
          </div>
        </div>

        <div className=" lg:h-1/3 flex gap-4">
          <img
            src={posts[3].img}
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>03.</h1>
              <Link className="text-blue-500">{posts[3].category}</Link>
              <span>{format(posts[3].createdAt)}</span>
            </div>
            <h1 className="text-xl font-bold">{posts[3].title}</h1>
            <p>{posts[3].description.substring(0, 150)}</p>
          </div>
        </div>

        <div className="lg:h-1/3 flex gap-4">
          <img
            src={posts[4].img}
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          <div className="flex-col">
            <div className="flex items-center gap-4">
              <h1>04.</h1>
              <Link className="text-blue-500">{posts[4].category}</Link>
              <span>{format(posts[4].createdAt)}</span>
            </div>
            <h1 className="text-xl font-bold">{posts[4].title}</h1>
            <p>{posts[4].description.substring(0, 150)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturePost;
