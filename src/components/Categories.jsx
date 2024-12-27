import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Categories() {
  return (
    <div className="hidden md:flex bg-white justify-between p-2 gap-4 rounded-full items-center shadow-lg">
      <div className="flex justify-between flex-1 flex-wrap">
        <Link className="bg-blue-800 text-white rounded-full px-2 py-2">
          All Posts
        </Link>
        <Link className="hover:bg-blue-50 rounded-full px-2 py-2">
          Web Design
        </Link>
        <Link className="hover:bg-blue-50 rounded-full px-2 py-2">
          Development
        </Link>
        <Link className="hover:bg-blue-50 rounded-full px-2 py-2">
          Databases
        </Link>
        <Link className="hover:bg-blue-50 rounded-full px-2 py-2">
          Search Engines
        </Link>
        <Link className="hover:bg-blue-50 rounded-full px-2 py-2">
          Marketing
        </Link>
      </div>
      <span>|</span>

      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
          //   onKeyDown={handleKeyPress}
        />
      </div>
    </div>
  );
}

export default Categories;
