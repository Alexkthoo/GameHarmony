import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { NavLink } from "react-router-dom";
import "./AllGames.css";

function AllGames() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const allGames = Object.values(games);

  return (
    <div className="all-games-grid">
      {allGames.map((game) => (
        <NavLink key={game.id} to={`/games/${game.id}`} className="game-link">
          <div className="test-123">
            <img src={game.img} alt="default game image" className="photo" />
            <div className="game-details">
              <div className="game-title">{game.game_title}</div>
              <p className="game-description ellipsis-text"></p>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllGames;
