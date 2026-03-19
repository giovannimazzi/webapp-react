import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Rating from "../../components/ui/Rating";
import ReviewCard from "../../components/reviews/ReviewCard";
import ReviewForm from "../../components/reviews/ReviewForm";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(fetchMovie, []);

  function fetchMovie() {
    axios.get(`http://localhost:3000/movies/${id}`).then((res) => {
      const movie = res.data.result;

      let voteSum = 0;
      movie.reviews.forEach((review) => {
        voteSum += review.vote;
      });
      const averageVote = Math.ceil(voteSum / movie.reviews.length);

      movie.average_vote = averageVote;
      setMovie(movie);
    });
  }

  if (!movie) return <h1>Loading...</h1>;
  return (
    <>
      <h1 className="mb-4">{movie.title}</h1>
      <div className="row">
        <div className="col-4">
          <img src={movie.image} className="img-fluid" />
        </div>
        <div className="col-8">
          <div className="mb-2 pb-2 border-bottom">
            <strong>Directed by:</strong>
            <address>
              <em>{movie.director}</em>
            </address>
          </div>
          <div className="mb-2 pb-2 border-bottom">
            <strong>Rating:</strong>
            <address>
              <Rating vote={movie.average_vote} maxVote={5} />
            </address>
          </div>
          <div className="mb-2 pb-2 border-bottom">
            <strong>Abstract:</strong>
            <p>{movie.abstract}</p>
          </div>
        </div>
      </div>

      <section className="my-5">
        <h2 className="mb-3">Reviews</h2>
        {movie.reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </section>

      <section className="my-5">
        <ReviewForm movieId={id} afterFormSubmit={fetchMovie} />
      </section>
    </>
  );
}
