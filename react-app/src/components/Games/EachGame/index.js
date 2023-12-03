import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesThunk, getOneGameThunk } from "../../../store/game";
import { useEffect } from "react";

function SingleGame() {
  const { id } = useParams();
  console.log("🚀 ~ file: index.js:8 ~ SingleGame ~ idDDDDDDDDDDDDDDDDD:", id);
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.allGames[id]);
  console.log("🚀 ~ file: index.js:8 ~ SingleGame ME LONG TIME ~ game:", game);

  useEffect(() => {
    dispatch(getAllGamesThunk(id));
  }, [dispatch, id]);

  if (!game) return null;

  return (
    <div>
      <h1>{game.game_title}</h1>
      <h1>NI FUCKKING HAO TO SINGLE GAME</h1>
    </div>
  );
}

export default SingleGame;
