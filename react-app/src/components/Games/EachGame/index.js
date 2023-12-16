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

    dispatch(getReviewThunks(id));
  }, [dispatch, id]);

  useEffect(() => {}, [reviews]);

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
        <div className="game-title-delete-update">
          <h1 className="eg-game-title">{game.game_title}</h1>
          {gameOwner && (
            <div className="delete-box">
              <div className="delete-game">
                <button onClick={handleGameUpdate}>Update Game</button>

                <DeleteGame gameId={id} />
              </div>
            </div>
          )}
        </div>
        <div className="eg-info-container">
          <img className="game-img" src={game.img} />
          <div className="eg-game-info">
            <div className="eg-game-about-about-info">{game.about_game}</div>
            {/* <div className="eg-game-rating">rating</div> */}
            <div className="eg-game-developer">Developer: {game.developer}</div>
            <div className="eg-game-publisher">Publisher: {game.publisher}</div>
          </div>
        </div>
        <div className="review-delete-update-container"></div>
        <div className="review-info">
          {Object.values(reviews).map((review, index) => (
            <div className="each-review" key={index}>
              <div className="icon"></div>
              <div className="name">
                <p className="name-p">
                  {review.user?.username.toUpperCase()} Wrote:{" "}
                  {review.description}
                </p>
                <img className="review-img" src={review.img} />
              </div>
            </div>
          ))}
          {!gameOwner && user && !userHasReviewed && (
            // <button onClick={handleReviewClick}>Add Review</button>
            <CreateGameReviewForm />
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleGame;
