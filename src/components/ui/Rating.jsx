export default function Rating({ vote, maxVote }) {
  function renderStars() {
    const stars = [];

    for (let i = 1; i <= maxVote; i++) {
      const starClass = i <= vote ? "bi-star-fill" : "bi-star";
      stars.push(<i key={i} className={`bi ${starClass} text-warning`}></i>);
    }

    return stars;
  }

  return <>{renderStars()}</>;
}
