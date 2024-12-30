import { useState } from "react";
import PostLists from "../components/PostLists";
import Sidemenu from "../components/Sidemenu";

export default function PostList() {
  const [openFilter, setFilter] = useState(false);

  return (
    <div>
      <h1>Blogs</h1>
      <div className="flex">
        <div>
          <PostLists />
        </div>
        <div>
          <button
            className="visible md:hidden"
            onClick={() => setFilter((filter) => !filter)}
          >
            Filter or Search
          </button>
          <div className={`${openFilter ? "visible" : "hidden"} md:block`}>
            <Sidemenu />
          </div>
        </div>
      </div>
    </div>
  );
}
