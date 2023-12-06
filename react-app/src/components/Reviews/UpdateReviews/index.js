import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneReviewThunk, updateReviewThunk } from "../../../store/review";
import { useHistory } from "react-router-dom";

const UpdateReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, yesSubmitted] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const reviews = useSelector((state) => state.reviews.allReviews[id]);

  useEffect(() => {
    dispatch(getOneReviewThunk(id)).then((res) => {
      if (res) {
        setRating(res.rating);
        setDescription(res.description);
      }
    });
  }, [dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorList = {};

    if (!description?.length || description?.length > 500)
      errorList.description =
        "Note's Description must be between 1 and 501 characters";
    if (Object.values(errorList).length > 0) {
      setErrors(errorList);
      return;
    }

    const form = new FormData();
    form.append("rating", rating);
    form.append("description", description);

    dispatch(updateReviewThunk(form, id)).then((res) => {
      if (res.errors) {
        setErrors(res.errors);
      } else {
        history.push(`/games/${reviews.game_id}`);
        yesSubmitted(true);
      }
    });
  };

  return (
    <>
      <h1>Update Review</h1>
      <div>
        <form className="game-form" onSubmit={handleSubmit}>
          <div>
            <label className="label">Rating</label>
            <input
              type="checkbox"
              checked={rating}
              onChange={() => setRating((prevRating) => !prevRating)}
              className="review-rating-input"
            />

            {errors.rating && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.rating[0]}
              </p>
            )}
          </div>

          <div>
            <label className="label">Description</label>
            <textarea
              type="textarea"
              placeholder="Description of Game"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="description-field"
            />

            {errors.description && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.description}
              </p>
            )}
          </div>

          <div>
            <button type="submit">Update Review</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateReview;
