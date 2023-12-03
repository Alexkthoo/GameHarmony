import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";

function LandingPage() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const allGames = Object.values(games);
  console.log(
    "🚀 ~ file: index.js:14 ~ LandingPage ~ asdadasdasallGames:",
    allGames
  );

  if (!allGames || !allGames.length) {
    return null;
  }

  //shuffle games to
  const shuffledGames = [...allGames].sort(() => Math.random() - 0.5);

  return (
    <div>
      {shuffledGames.map((game) => (
        <div key={game.id}>
          <p>{game.game_title}</p>
        </div>
      ))}
    </div>
  );
}

export default LandingPage;
