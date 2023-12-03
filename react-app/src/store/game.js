// constants

const GET_ALL_GAMES = "game/GET_ALL_GAMES";
const GET_ONE_GAME = "game/GET_ONE_GAME";

// action creator

const getAllGames = (games) => {
  return {
    type: GET_ALL_GAMES,
    games,
  };
};

const getOneGame = (game) => {
  return {
    type: GET_ONE_GAME,
    game,
  };
};

// thunk

export const getAllGamesThunk = () => async (dispatch) => {
  const res = await fetch("/api/games/");
  if (res.ok) {
    const games = await res.json();
    dispatch(getAllGames(games));
    return games;
  } else {
    const errors = await res.json();
    return errors;
  }
};

export const getOneGameThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/games/${id}`);
  if (res.ok) {
    const game = await res.json();
    dispatch(getOneGame(game));
    return game;
  }
};

//initial state
const initialState = {
  allGames: {},
};

//reducer
const gamesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_GAMES:
      newState = { ...state, allGames: {} };
      action.games.forEach((game) => {
        newState.allGames[game.id] = game;
      });
      console.log("🚀 ~ file: game.js:43 ~ gamesReducer ~ newState:", newState);
      return newState;

    case GET_ONE_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.game.id] = action.game;
    default:
      return state;
  }
};

export default gamesReducer;
