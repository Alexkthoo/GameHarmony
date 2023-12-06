import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneReviewThunk, updateReviewThunk } from "../../../store/review";
import { useHistory } from "react-router-dom";

const UpdateReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationObject, setValidationObject] = useState({});

  const [submitted, yesSubmitted] = useState(false);
  const game = useSelector((state) => state.reviews.allReviews);
  console.log("🚀 ~ file: index.js:6 ~ UpdateGame ~ game:", game);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOneReviewThunk(id)).then((response) => {
      setRating(response.game_title);
      setDescription(response.description);
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
    console.log("🚀 ~ file: index.js:71 ~ handleSubmit ~ form:", form);

    dispatch(updateReviewThunk(form, id)).then((res) => {
      if (res.errors) {
        setErrors(res.errors);
      } else {
        history.push(`/games`);
        yesSubmitted(true);
        // reset()
        return "success";
      }
    });
  };

  return (
    <>
      <h1>testing update shit 123</h1>
      <div>
        <form className="game-form" onSubmit={handleSubmit}>
          <div>
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
            <button type="submit">Update Game</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateReview;
