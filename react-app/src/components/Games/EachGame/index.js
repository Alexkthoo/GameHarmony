import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesThunk, getOneGameThunk } from "../../../store/game";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DeleteGame from "../DeleteGame";
import { deleteReviewThunk, getReviewThunks } from "../../../store/review";
import DeleteReview from "../../Reviews/DeleteReviews";

function SingleGame() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.allGames[id]);
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.allReviews);

  const userId = user?.id;
  const gameOwner = userId === game?.user_id;

  useEffect(() => {
    dispatch(getOneGameThunk(id));
    dispatch(getReviewThunks(id));
  }, [dispatch, id]);

  const handleGameUpdate = () => {
    history.push(`/games/${id}/update`);
  };

  const handleReviewClick = () => {
    if (!user) {
      alert("Please sign up to leave a review for this game.");
      return;
    }
    history.push(`/games/${id}/reviews/new`);
  };

  if (!game) return null;

  const handleDeleteReview = (reviewId) => {
    dispatch(deleteReviewThunk(reviewId));
  };

  const handleUpdateReview = (reviewId) => {
    // Redirect to the update review page
    history.push(`/reviews/${reviewId}/update`);
  };

  return (
    <div>
      <h1>{game.game_title}</h1>
      <img src={game.img} />
      {gameOwner && (
        <div className="delete-box">
          <div>
            <div className="delete-game">
              <h1>Update Game</h1>
              <button onClick={handleGameUpdate}>Update Game</button>
              <h1>Delete Game</h1>
              <DeleteGame gameId={id} />
            </div>
          </div>
        </div>
      )}

      <div className="spot-reviews">
        {Object.values(reviews).map((review, index) => (
          <div className="each-review" key={index}>
            <div className="icon"></div>
            <div className="name">
              <p className="name-p">
                USERNAME: {review.user?.username} said {review.description}
              </p>

              <p className={`review-img1 ${review.user_img ? "with-img" : ""}`}>
                {review.review}
              </p>
              {review.user_img && <img src={review.user_img} alt="User" />}
              <button onClick={() => handleDeleteReview(review.id)}>
                Delete Review
              </button>
              <button onClick={() => handleUpdateReview(review.id)}>
                Update Review
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleReviewClick}>Add Review</button>
    </div>
  );
}

export default SingleGame;
