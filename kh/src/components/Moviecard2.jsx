import React from "react";
import { Link } from "react-router-dom";

 function MovieCard({ movie }) {
  const { Title, Year, Poster, imdbID } = movie;
  const poster =
    Poster && Poster !== "N/A"
      ? Poster
      : `https://placehold.co/300x450?text=${encodeURIComponent(Title)}`;

  return (
    <Link
      to={`/movie/${imdbID}`}
      className="group rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-amber-500 transition"
    >
      <div className="aspect-[2/3] overflow-hidden">
        <img
          src={poster}
          alt={`${Title} poster`}
          className="w-full h-full object-cover group-hover:scale-105 transition"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold line-clamp-2 text-neutral-100">
          {Title}
        </h3>
        <p className="text-xs text-neutral-400 mt-1">{Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
