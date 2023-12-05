import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllGamesThunk } from "../../../store/game";
import { createGameReview } from "../../../store/review";

function CreateGameReviewForm() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const game = useSelector((state) => state.games.allGames[id]);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const [img, setImg] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [submitted, yesSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(getAllGamesThunk()).catch((res) => res);
  }, [dispatch]);

  useEffect(() => {
    if (!review || !img) setDisabled(true);
    else setDisabled(false);
  }, [review, img]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData();
    formData.append("img", img);
    formData.append("rating", rating);
    formData.append("review", review);
    formData.append("user_id", user.id);

    setImageLoading(true);

    try {
      const res = await dispatch(createGameReview(formData, id));

      setImageLoading(false);

      if (!res.errors) {
        history.push(`/games/${id}`);
        yesSubmitted(true);
        reset();
      } else {
        setErrors(res.errors);
      }
    } catch (error) {
      console.error("Error creating review:", error);
    }
  };

  const reset = () => {
    setRating(1);
    setReview("");
    setImg(null);
  };

  useEffect(() => {
    yesSubmitted(false);
    setErrors({});
  }, [submitted]);

  if (!game) return null;

  return (
    <div className="create-review-container">
      <form
        onSubmit={handleSubmit}
        className="create-review-field"
        encType="multipart/form-data"
      >
        <div>
          <h1 className="h1Review">Add a Review</h1>
          <label className="label">Rating</label>
          <input
            type="checkbox"
            checked={rating === 1}
            onChange={(e) => setRating(e.target.checked ? 1 : 0)}
            className="review-rating-input"
          />

          {errors.rating && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.rating[0]}
            </p>
          )}
        </div>

        <div>
          <label className="label">Review</label>
          <input
            type="text"
            placeholder=""
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="review-input"
          />

          {errors.review && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.review[0]}
            </p>
          )}
        </div>

        <div>
          <label className="label">Review Image</label>
          <input
            type="file"
            accept="image/*"
            placeholder=""
            onChange={(e) => {
              const file = e.target.files[0];
              console.log("Selected File:", file);
              setImg(file);
            }}
            className=""
          />

          {errors.img && (
            <p style={{ fontSize: "10px", color: "red" }}>*{errors.img[0]}</p>
          )}
        </div>

        <div className="create-review-button">
          <button type="submit" disabled={disabled}>
            Add Review
          </button>

          {imageLoading && <p>Loading...</p>}
        </div>
      </form>
    </div>
  );
}

export default CreateGameReviewForm;
