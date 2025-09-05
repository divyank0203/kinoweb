import React, { useState, useEffect } from "react";
import MovieCard from "./Moviecard";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const randomQueries = [
  "Avengers",
  "Batman",
  "Spiderman",
  "Harry Potter",
  "Matrix",
  "Star Wars",
  "Inception",
  "Friends",
  "Breaking Bad",
  "Game of Thrones",
  "Lord of the Rings",
  "Toy Story",
  "Jurassic Park",
  "The Godfather",
  "Black Panther",
  "Game",
  "Super",
  
  
];

function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let searchTerm = query?.trim();
    
    // If no query, pick a random title
    if (!searchTerm) {
      const randomIndex = Math.floor(Math.random() * randomQueries.length);
      searchTerm = randomQueries[randomIndex];
    }

    setLoading(true);
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <p className="text-center text-orange-500 mt-10">Loading...</p>;
  }

  if (!movies.length) {
    return <p className="text-center text-orange-500 mt-10">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6 bg-black text-white">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
