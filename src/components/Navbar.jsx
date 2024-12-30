import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "./Image";
import { userContext } from "../context/userDetails";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { authToken, logout } = useContext(userContext);
  return (
    <div className="flex justify-between items-center h-[40px]">
      <div className="flex items-center gap-2 motion-preset-slide-right ">
        <Image path="/logo.png" styling="w-8 h-8" alt="logo" />
        <span className="text-xl font-bold">My Journal</span>
      </div>
      <div className="md:hidden cursor-pointer">
        <div onClick={() => setOpen((open) => !open)}>
          {open ? (
            <FontAwesomeIcon icon={faX} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <div
          className={` flex flex-col absolute z-10 items-center gap-8 justify-center bg ${
            open ? "-right-0" : "-right-[100%]"
          } w-full h-screen bg-[#e6e6fA] top-[60px] text-lg font-medium`}
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
            Trending
          </Link>
          <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
            Most Popular
          </Link>
          {authToken == null ? (
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login
              </button>
            </Link>
          ) : (
            <button className="py-2 px-4 rounded-3xl bg-red-600 text-white">
              Logout
            </button>
          )}
        </div>
      </div>
      <div className="hidden md:flex gap-8 items-center motion-preset-slide-left  ">
        <Link to="/">Home</Link>
        <Link to="/posts?sort=trending">Trending</Link>
        <Link to="/posts?sort=popular">Most Popular</Link>
        <Link>About</Link>
        {authToken == null ? (
          <Link to="/login" onClick={() => setOpen(false)}>
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={() => logout()}
            className="py-2 px-4 rounded-3xl bg-red-600 text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
