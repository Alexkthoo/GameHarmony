import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const allGames = Object.values(games);
  if (!allGames || !allGames.length) {
    return null;
  }

  //shuffle games to
  const shuffledGames = [...allGames].sort(() => Math.random() - 0.5);

  let count = 1;

  const [topGame, secondGame, thirdGame, ...remainingGames] = shuffledGames;

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
          <div>{topGame.game_title}</div>
        </div>
      </NavLink>

      {/* Three games side by side */}
      <div className="side-by-side-games">
        {/* Second game */}

        <NavLink
          className="bottom-left-contain"
          key={secondGame.id}
          to={`/games/${secondGame.id}`}
        >
          <div className="bottom-tophalf-container">
            <img
              className="bottom-photo"
              src={secondGame.img}
              alt="default game image"
            />
          </div>
          <div className="bottom-bottomhalf-container">
            {secondGame.game_title}
          </div>
        </NavLink>

        {/* Third game */}

        <NavLink
          className="bottom-middle-contain"
          key={thirdGame.id}
          to={`/games/${thirdGame.id}`}
        >
          <div className="bottom-tophalf-container">
            <img
              className="bottom-photo"
              src={thirdGame.img}
              alt="default game image"
            />
          </div>
          <div className="bottom-bottomhalf-container">
            {thirdGame.game_title}
          </div>
        </NavLink>

        {/* Fourth game (if there are more than 3 games) */}
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

            <div>{remainingGames[0].game_title}</div>
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
