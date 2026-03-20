import { Link } from "react-router";
import Rating from "../ui/Rating";

export default function MovieCard({ movie }) {
  return (
    <div className="card movie-card h-100">
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <div className="card-text  flex-grow-1">
          <em>{movie.director}</em>
          <div className="my-2">
            <Rating vote={Math.ceil(movie.average_vote)} maxVote={5} />
          </div>
          <p>{movie.abstract}</p>
        </div>

        <Link to={`/movies/${movie.id}`}>See more</Link>
      </div>
    </div>
  );
}
