import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { NavLink, useHistory } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const allGames = Object.values(games);
  if (!allGames || !allGames.length) {
    return null;
  }

  //shuffle games to
  const shuffledGames = [...allGames].sort(() => Math.random() - 0.50);

  let count = 1;

  const [topGame, secondGame, thirdGame, ...remainingGames] = shuffledGames;

  const handleViewAllGames = () => {
    history.push("/games");
  };

  return (
    <div className="games-landing-flex">
      <NavLink
        className="top-game-container"
        key={topGame.id}
        to={`/games/${topGame.id}`}
      >
        <div className="top-left-contain">
          <img
            className="top-left-photo"
            src={topGame.img}
            alt="default game image"
          />
        </div>
        <div className="top-right-contain">
          <div className="lp-game-title">{topGame.game_title}</div>
          <div className="lp-about-game">{topGame.about_game}</div>
          <div>Developer: {topGame.developer}</div>
          <div>Publisher: {topGame.publisher}</div>
          <div>System Support: {topGame.system_support}</div>
        </div>
      </NavLink>

      <div className="side-by-side-games">
        <NavLink
          className="bottom-left-contain"
          key={secondGame.id}
          to={`/games/${secondGame?.id}`}
        >
          <div className="bottom-tophalf-container">
            <img
              className="bottom-photo"
              src={secondGame?.img}
              alt="default game image"
            />
          </div>
          <div className="bottom-bottomhalf-container">
            {secondGame?.game_title}
          </div>
        </NavLink>

        <NavLink
          className="bottom-middle-contain"
          key={thirdGame?.id}
          to={`/games/${thirdGame?.id}`}
        >
          <div className="bottom-tophalf-container">
            <img
              className="bottom-photo"
              src={thirdGame?.img}
              alt="default game image"
            />
          </div>
          <div className="bottom-bottomhalf-container">
            {thirdGame?.game_title}
          </div>
        </NavLink>

        {remainingGames.length > 0 && (
          <NavLink
            className="bottom-right-contain"
            key={remainingGames[0].id}
            to={`/games/${remainingGames[0].id}`}
          >
            <img
              className="bottom-photo"
              src={remainingGames[0].img}
              alt="default game image"
            />

            <div className="bottom-bottomhalf-container">
              {remainingGames[0].game_title}
            </div>
          </NavLink>
        )}
      </div>
      <div className="lp-view-all-games">
        <button
          onClick={handleViewAllGames}
          className="lp-view-all-games-button"
        >
          VIEW ALL GAMES
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
