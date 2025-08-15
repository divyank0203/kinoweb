import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export default function MovieDetail() {
  const { id } = useParams();
  const [status, setStatus] = useState("loading");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    (async () => {
      try {
        setStatus("loading");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
          { signal: controller.signal }
        );
        const data = await res.json();
        if (data.Response === "False") {
          setStatus("empty");
          return;
        }
        setMovie(data);
        setStatus("success");
      } catch (e) {
        if (e.name !== "AbortError") setStatus("error");
      }
    })();

    return () => controller.abort();
  }, [id]);

  if (status === "loading") return <p className="p-6">Loading…</p>;
  if (status === "error") return <p className="p-6 text-rose-400">Failed to load.</p>;
  if (status === "empty") return <p className="p-6 text-neutral-400">Not found.</p>;

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-sm text-amber-400 hover:text-amber-300"
      >
        ← Back
      </Link>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/300x450?text=No+Image"}
          alt={`${movie.Title} poster`}
          className="rounded-xl border border-neutral-800"
        />

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-neutral-50">
            {movie.Title}{" "}
            <span className="text-neutral-400 font-medium">({movie.Year})</span>
          </h1>
          <p className="text-neutral-300">
            {movie.Rated} • {movie.Runtime} • {movie.Genre}
          </p>
          <p className="text-neutral-200">{movie.Plot}</p>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-neutral-300">
            <p><span className="text-neutral-400">Director:</span> {movie.Director}</p>
            <p><span className="text-neutral-400">Writer:</span> {movie.Writer}</p>
            <p><span className="text-neutral-400">Actors:</span> {movie.Actors}</p>
            <p><span className="text-neutral-400">IMDB:</span> {movie.imdbRating}</p>
          </div>
          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-2 items-center px-3 py-1.5 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </div>
  );
}
