import { Link } from "react-router-dom";
import Search from "./Search";

function Categories() {
  return (
    <div className="hidden md:flex bg-white justify-between p-2 gap-4 rounded-full items-center shadow-lg">
      <div className="flex justify-between flex-1 flex-wrap">
        <Link
          to="/posts"
          className="bg-blue-800 text-white rounded-full px-2 py-2"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className="hover:bg-blue-50 rounded-full px-2 py-2"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="hover:bg-blue-50 rounded-full px-2 py-2"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="hover:bg-blue-50 rounded-full px-2 py-2"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="hover:bg-blue-50 rounded-full px-2 py-2"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="hover:bg-blue-50 rounded-full px-2 py-2"
        >
          Marketing
        </Link>
      </div>
      <Search />
    </div>
  );
}

export default Categories;
