import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";

function ManageGames() {
  const user = useSelector((state) => state.session.user);
  console.log("🚀 ~ file: index.js:5 ~ ManageGames ~ user:", user);
  const games = useSelector((state) => state.games.allGames);
  console.log("🚀 ~ file: index.js:9 ~ ManageGames ~ THIS IS GAME:", games);
  const allGames = Object.values(games);
  console.log(
    "🚀 ~ file: index.js:8 ~ ManageGames ~ THIS IS ALLGAMES:",
    allGames
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  return (
    <>
      <h1>MANAGE GAMES HEREE</h1>
      <div>testing here</div>
    </>
  );
}

export default ManageGames;
