import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { NavLink } from "react-router-dom";
import "../LandingPage/LandingPage.css";

function AllGames() {
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
  let count = 1;
  return (
    <div className="games-grid">
      {shuffledGames.map((game) => (
        <NavLink className="test" key={game.id} to={`/games/${game.id}`}>
          <div className="test-123">
            <div>
              <div>
                <img
                  className="photo"
                  src={game.img}
                  alt="default game image"
                />
              </div>
              <div>
                <div>
                  {count++}. {game.game_title}
                </div>
                <p className="game-description ellipsis-text"></p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllGames;
