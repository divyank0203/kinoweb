import React from "react";
import MovieList from "../components/Movielist";

export default function Home({ query }) {
  return (
    <div>
      <MovieList query={query} />
    </div>
  );
}
