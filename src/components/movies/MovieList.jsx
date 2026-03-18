import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
  return (
    <div className="row row-cols-3 g-5">
      {movies.map((movie) => (
        <div className="col" key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
}
