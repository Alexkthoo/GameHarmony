import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { useHistory, NavLink } from "react-router-dom";
import DeleteGame from "../DeleteGame";
import "./ManageGames.css";

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
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const userGames = allGames.filter((game) => {
    return game.user_id === user.id;
  });
  console.log("🚀 ~ GAMES THAT USERS OWN", userGames);

  if (!user) {
    history.push("/");
  }

  const renderCreateSpotButton = userGames.length === 0;
  return (
    <>
      <div className="manage-spot-container">
        <div className="manage">
          <h2>Manage Games</h2>
          {renderCreateSpotButton && (
            <div id="new-spot-manage">
              <NavLink id="manage-spot-button" to="/games/new">
                Create a new Game
              </NavLink>
            </div>
          )}
        </div>
        <div className="games-grid">
          {userGames.map((game) => (
            <div key={game.id} className="spots-grid-update-button">
              <NavLink to={`/games/${game.id}`}>
                <div className="spot-card">
                  <img id="spot-img" src={`${game.img}`} alt="img" />
                  <div className="manage-game-title">{game.game_title}</div>
                </div>
              </NavLink>
              <div className="update-delete-button">
                <button>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/games/${game.id}/update`}
                    id="update-button"
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
