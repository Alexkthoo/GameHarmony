// constants

const GET_ALL_GAMES = "game/GET_ALL_GAMES";
const GET_ONE_GAME = "game/GET_ONE_GAME";
const CREATE_GAME = "/game/CREATE_GAME";
const UPDATE_GAME = "/game/UPDATE_GAME";

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

const createGame = (game) => {
  return {
    type: CREATE_GAME,
    game,
  };
};

const updateGame = (game) => {
  return {
    type: UPDATE_GAME,
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

export const createGameThunk = (formData) => async (dispatch) => {
  try {
    const res = await fetch("/api/games/new", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const { game } = await res.json();
      dispatch(createGame(game));
      return { game };
    } else {
      const data = await res.json();
      console.error("Error creating game:", data);
      return data;
    }
  } catch (error) {
    console.error("Error in adding game", error);
    return ["An error occurred while adding a new game"];
  }
};

export const updateSpotThunk = (formData, id) => async (dispatch) => {
  try {
    const res = await fetch(`/api/games/${id}`, {
      method: "PUT",
      body: formData,
    });
    if (res.ok) {
      const game = await res.json();
      console.log("🚀 ~ file: game.js:90 ~ updateSpotThunk ~ game:", game);
      dispatch(updateGame(game));
      return game;
    } else {
      const data = await res.json();
      return data;
    }
  } catch (error) {
    console.error("error updating", error);
    return ["error updating"];
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
      return newState;

    case UPDATE_GAME:
      newState = { ...state, allGames: { ...state.allGames } };
      newState.allGames[action.game.id] = action.game;
      return newState;
    default:
      return state;
  }
};

export default gamesReducer;
