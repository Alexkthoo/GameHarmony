const GET_REVIEWS = "review/GET_REVIEWS";
const CREATE_REVIEW = "review/CREATE_REVIEW";

// action

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const createReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review,
  };
};

// THUNKKKS

export const getReviewThunks = (gameId) => async (dispatch) => {
  try {
    const res = await fetch(`/api/reviews/${gameId}`);
    if (res.ok) {
      const reviews = await res.json();
      dispatch(getReviews(reviews));
      console.log("🚀 ~ file: review.js:20 ~ YOUR REVIEW THUNKS", reviews);
      return reviews;
    }
  } catch (e) {
    return await e.json();
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
      newState = { ...state, allReviews: {} };
      action.reviews.forEach((review) => {
        newState.allReviews[review.id] = review;
      });
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
    default:
      return state;
  }
};

export default reviewsReducer;
