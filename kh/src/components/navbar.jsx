import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchCircle } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
// If you have a logo image, uncomment next line and the <img />
// import logo from "../assets/images/image.png";

export default function Navbar({ onSearch }) {
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const q = input.trim();
    if (q) onSearch(q);
  };

  return (
    <nav className="sticky top-0 z-20 bg-neutral-950/90 backdrop-blur border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Brand */}
          <Link to="/" className="flex items-center gap-2">
            {/* <img src={logo} alt="Kinohub" className="h-9 w-9 rounded-full border-2 border-amber-500" /> */}
            <span className="text-2xl font-bold tracking-tight text-neutral-50">
              Kino
              <span className="ml-1 px-1 rounded-sm bg-amber-500 text-black font-extrabold">
                web
              </span>
            </span>
          </Link>

          {/* Middle: Search */}
          <form
            onSubmit={submit}
            className="flex items-center bg-neutral-900 rounded-full border border-neutral-800 focus-within:border-amber-500 transition w-full max-w-xl"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search movies or shows…"
              className="flex-1 px-4 py-2 bg-transparent text-neutral-100 placeholder-neutral-400 outline-none"
              aria-label="Search movies or shows"
              onKeyDown={(e) => {
                if (e.key === "Enter") submit(e);
              }}
            />
            <button
              type="submit"
              className="px-2 py-2 rounded-r-full text-amber-500 hover:text-amber-400 hover:cursor-pointer"
              aria-label="Search"
            >
              <IoSearchCircle className="text-3xl" />
            </button>
          </form>

          {/* Right: Favorites (placeholder) */}
          <button
            type="button"
            onClick={() => alert("Favorites coming soon")}
            className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-100 hover:bg-white hover:text-black px-3 py-1.5 rounded-2xl transition hover:cursor-pointer"
          >
            <MdOutlineFavorite className="text-amber-500" />
            Favorites
          </button>
        </div>
      </div>
    </nav>
  );
}
