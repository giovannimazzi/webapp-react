import { Link } from "react-router";

export default function MovieCard({ movie }) {
  return (
    <div className="card h-100">
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.avg_vote}/5</p>
        <Link to={`/movies/${movie.id}`}>See more</Link>
      </div>
    </div>
  );
}
