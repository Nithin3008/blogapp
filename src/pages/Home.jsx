import React from "react";
import { Link } from "react-router-dom";
import Categories from "../components/Categories";
import FeaturePost from "../components/FeaturePost";
import PostLists from "../components/PostLists";

function Home() {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <span>.</span>
        <span className="text-blue-800 px-2">Blogs and Articles</span>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
            corporis dolorem perspiciatis error hic omnis, quis similique.
          </p>
        </div>
        <Link to="write" className="hidden md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="150"
            height="150"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute inset-0  m-auto w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      <Categories />
      <FeaturePost />
      <h1 className="mt-10 py-2 text-xl text-gray-500">Recent Posts</h1>
      <PostLists />
    </div>
  );
}

export default Home;
