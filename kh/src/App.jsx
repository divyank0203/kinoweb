import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetails";

export default function App() {
  const [query, setQuery] = useState(""); // start empty; show CTA on home

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar onSearch={(q) => setQuery(q)} />
        <Routes>
          <Route path="/" element={<Home query={query} />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
