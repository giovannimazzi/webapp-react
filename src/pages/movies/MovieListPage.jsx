import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../components/movies/MovieList";

export default function MovieListPage() {
  const [movies, setMovies] = useState([]);
  useEffect(fetchMovies, []);

  function fetchMovies() {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data.result));
  }

  return (
    <>
      <h1 className="mb-4">Movie list</h1>
      <MovieList movies={movies} />
    </>
  );
}
