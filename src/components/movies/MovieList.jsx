import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="row row-cols-5 g-3">
      {movies.map((movie) => (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
