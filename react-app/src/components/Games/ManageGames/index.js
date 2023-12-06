import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { useHistory, NavLink } from "react-router-dom";
import DeleteGame from "../DeleteGame";
import "./ManageGames.css";

function ManageGames() {
  const user = useSelector((state) => state.session.user);
  const games = useSelector((state) => state.games.allGames);
  const allGames = Object.values(games);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const userGames = allGames.filter((game) => {
    return game.user_id === user.id;
  });
  if (!user) {
    history.push("/");
  }

  const renderCreateGameButton = userGames.length === 0;
  return (
    <>
      <div className="manage-game-container">
        <div className="manage">
          <h2>Manage Games</h2>
          {renderCreateGameButton && (
            <div id="new-game-manage">
              <NavLink id="manage-game-button" to="/games/new">
                Create a new Game
              </NavLink>
            </div>
          )}
        </div>
        <div className="games-grid">
          {userGames.map((game) => (
            <div key={game.id} className="games_grid_update-button">
              <NavLink to={`/games/${game.id}`}>
                <div className="game-card">
                  <img src={`${game.img}`} alt="img" />
                  <div className="manage-game-title">{game.game_title}</div>
                </div>
              </NavLink>
              <div className="update-delete-button">
                <button>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/games/${game.id}/update`}
                  >
                    Update
                  </NavLink>
                </button>
                <DeleteGame gameId={game.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ManageGames;
