import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../../components/movies/MovieList";
import { Link } from "react-router";
import { useLoaderContext } from "../../contexts/LoaderContext";

export default function MovieListPage() {
  const [movies, setMovies] = useState([]);
  const { startLoading, endLoading } = useLoaderContext();

  useEffect(fetchMovies, []);

  function fetchMovies() {
    startLoading();

    axios
      .get("http://localhost:3000/movies")
      .then((res) => setMovies(res.data.result))
      .catch((err) => {
        showNotification(err.message, "danger");
      })
      .finally(() => {
        endLoading();
      });
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="m-0">Movie list</h1>
        <div className="d-flex gap-2 align-items-center">
          <Link className="btn btn-primary" href="/movies/create">
            Create Movie
          </Link>
        </div>
      </div>
      <MovieList movies={movies} />
    </>
  );
}
