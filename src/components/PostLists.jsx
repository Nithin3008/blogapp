import PostListItem from "./PostListItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const fetchPosts = async (searchParams) => {
  const searchParamsObj = Object.fromEntries([...searchParams]);
  const res = await axios.get(`http://localhost:3000/posts`, {
    params: { ...searchParamsObj },
  });
  return res.data;
};

const PostList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["posts", searchParams.toString()],
    queryFn: () => fetchPosts(searchParams),
  });

  if (isPending) {
    return <div>Loading Posts</div>;
  }
  if (error) {
    return <div>Something goes wrong</div>;
  }

  console.log(data);
  return (
    <>
      {data.posts.map((post) => (
        <PostListItem key={post._id} post={post} />
      ))}
    </>
  );
};

export default PostList;
