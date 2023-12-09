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
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [submitted, yesSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    dispatch(getAllGamesThunk()).catch((res) => res);
  }, [dispatch]);

  useEffect(() => {
    if (!description) setDisabled(true);
    else setDisabled(false);
  }, [description, img]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const formData = new FormData();
    formData.append("img", img);
    formData.append("rating", rating);
    formData.append("description", description);
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
      console.error("creating review errors", error);
    }
  };

  const reset = () => {
    setRating(1);
    setDescription("");
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
            checked={Boolean(rating)}
            onChange={(e) => setRating(e.target.checked)}
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
          <textarea
            style={{
              height: "50px",
              width: "400px",
              paddingLeft: "5px",
              paddingTop: "5px",
            }}
            type="text"
            placeholder=""
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="review-input"
          />

          {errors.description && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.description[0]}
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
