const GET_REVIEWS = "review/GET_REVIEWS";
const CREATE_REVIEW = "review/CREATE_REVIEW";
const UPDATE_REVIEW = "review/UPDATE_REVIEW";
const GET_ONE_REVIEW = "review/GET_ONE_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";

// action

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const getOneReview = (review) => {
  return {
    type: GET_ONE_REVIEW,
    review,
  };
};

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};

const updateReview = (review) => ({
  type: UPDATE_REVIEW,
  review,
});

const deleteReview = (review) => ({
  type: DELETE_REVIEW,
  review,
});
// THUNKKKS

export const deleteReviewThunk = (reviewId) => async (dispatch) => {
  let res;
  try {
    console.log("Deleting review with ID:", reviewId);
    res = await fetch(`/api/reviews/${reviewId}/delete`, {
      method: "DELETE",
    });
    if (res.ok) {
      dispatch(deleteReview(reviewId));
    }
  } catch (error) {
    console.error("Error deleting", error);
    return ["error deleting"];
  }
};

export const getOneReviewThunk = (id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/reviews/${id}/reviews`);

    if (!res.ok) {
      throw new Error(`review ${id} not found`);
    }

    const review = await res.json();

    if (Array.isArray(review) && review.length > 0) {
      dispatch(getOneReview(review[0]));
      return review[0];
    } else {
      throw new Error(`review ${id} not found`);
    }
  } catch (error) {
    console.error(error.message);
    return null;
  }
};

// GET ALL REVIEWS FOR A GAME_ID
export const getReviewThunks = (gameId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/reviews/${gameId}/game`);
    if (res.ok) {
      const reviews = await res.json();
      dispatch(getReviews(reviews));
      console.log("🚀 ~ file: review.js:20 ~ YOUR REVIEW THUNKS", reviews);
      return reviews;
    }
  } catch (error) {
    return await error.json();
  }
};

export const updateReviewThunk = (formData, id) => async (dispatch) => {
  formData.append("img", new File([], "placeholder.jpg"));

  try {
    const res = await fetch(`/api/reviews/${id}/update`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      const review = await res.json();
      dispatch(updateReview(review));
      return review;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error("Error updating", error);
    return ["error updating"];
  }
};

export const createGameReview = (formData, id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/reviews/${id}/reviews/new`, {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const { review } = await res.json();
      dispatch(createReview(review));
      return review;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error("creating review error:", error);
    return { errors: ["there's an error while creating review."] };
  }
};

//initial state
const initialState = {
  allReviews: {},
};

//reducer
const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = {
        ...state,
        allReviews: action.reviews.reduce((reviewsMap, review) => {
          reviewsMap[review.id] = review;
          return reviewsMap;
        }, {}),
      };
      return newState;
    case CREATE_REVIEW:
      if (action.review && action.review.id) {
        return {
          ...state,
          allReviews: {
            ...state.allReviews,
            [action.review.id]: action.review,
          },
        };
      }

      return state;

    case UPDATE_REVIEW:
      newState = { ...state, allReviews: { ...state.allReviews } };
      newState.allReviews[action.review.id] = action.review;
      return newState;

    case GET_ONE_REVIEW:
      return {
        ...state,
        allReviews: { ...state.allReviews, [action.review.id]: action.review },
      };

    case DELETE_REVIEW:
      newState = { ...state, allReviews: { ...state.allReviews } };
      delete newState.allReviews[action.review];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
