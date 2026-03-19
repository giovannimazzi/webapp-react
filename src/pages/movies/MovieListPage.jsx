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
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="m-0">Movie list</h1>
        <div className="d-flex gap-2 align-items-center">
          <a className="btn btn-primary" href="/movies/create">
            Create Movie
          </a>
        </div>
      </div>

      <MovieList movies={movies} />
    </>
  );
}
