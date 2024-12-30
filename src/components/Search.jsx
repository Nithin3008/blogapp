import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

function Search() {
  const location = useLocation();
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  function handleKeyPress(e) {
    if (e.key == "Enter") {
      const query = e.target.value;
      if (location.pathname === "/posts") {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        nav(`/posts?search=${query}`);
      }
    }
  }
  return (
    <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <input
        type="text"
        placeholder="search a post..."
        className="bg-transparent outline-none"
        onKeyDown={handleKeyPress}
      />
    </div>
  );
}

export default Search;
