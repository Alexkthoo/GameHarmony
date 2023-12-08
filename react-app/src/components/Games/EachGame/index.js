import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesThunk, getOneGameThunk } from "../../../store/game";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DeleteGame from "../DeleteGame";
import { deleteReviewThunk, getReviewThunks } from "../../../store/review";
import DeleteReview from "../../Reviews/DeleteReviews";
import "./EachGame.css";
import CreateGameReviewForm from "../../Reviews/CreateReviews";

function SingleGame() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.allGames[id]);
  const user = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => state.reviews.allReviews);

  const userId = user?.id;
  const gameOwner = userId === game?.user_id;

  const userHasReviewed =
    (Array.isArray(reviews) &&
      reviews.some((review) => review.user?.id === userId)) ||
    (typeof reviews === "object" &&
      Object.values(reviews).some((review) => review.user?.id === userId));

  useEffect(() => {
    dispatch(getOneGameThunk(id));
    console.log("Before fetching reviews:", reviews);
    dispatch(getReviewThunks(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log("After fetching reviews:", reviews);
  }, [reviews]);

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
    history.push(`/reviews/${reviewId}/update`);
  };

  return (
    <div className="each-game-container">
      <div className="game-info">
        <h1>{game.game_title}</h1>
        <img className="game-img" src={game.img} />

        <div></div>
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
      </div>
      <div className="review-info">
        {Object.values(reviews).map((review, index) => (
          <div className="each-review" key={index}>
            <div className="icon"></div>
            <div className="name">
              <p className="name-p">
                USERNAME: {review.user?.username} said {review.description}
              </p>
              <img className="review-img" src={review.img} />
              <div className="delete-review-button">
                {user && user.id === review.user?.id && (
                  <>
                    <button onClick={() => handleDeleteReview(review.id)}>
                      Delete Review
                    </button>
                    <button onClick={() => handleUpdateReview(review.id)}>
                      Update Review
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        {!gameOwner && user && !userHasReviewed && (
          // <button onClick={handleReviewClick}>Add Review</button>
          <CreateGameReviewForm />
        )}
      </div>
    </div>
  );
}

export default SingleGame;
