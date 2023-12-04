const GET_REVIEWS = "review/GET_REVIEWS";

// action

const getReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
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
    default:
      return state;
  }
};

export default reviewsReducer;
