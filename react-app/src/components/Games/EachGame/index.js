import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllGamesThunk, getOneGameThunk } from "../../../store/game";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import DeleteGame from "../DeleteGame";

function SingleGame() {
  const { id } = useParams();
  const history = useHistory();
  console.log("🚀 ~ file: index.js:8 ~ SingleGame ~ idDDDDDDDDDDDDDDDDD:", id);
  const dispatch = useDispatch();
  const game = useSelector((state) => state.games.allGames[id]);
  const user = useSelector((state) => state.session.user);

  // const currGame = Object.values(game);
  // console.log("🚀 ~ file: index.js:15 ~ SingleGame ~ currGame:", currGame);

  const userId = user?.id;
  const gameOwner = userId === game?.user_id;
  console.log("🚀 ~ file: index.js:20 ~ SingleGame ~ gameOwner:", gameOwner);

  useEffect(() => {
    // dispatch(getAllGamesThunk(id));
    dispatch(getOneGameThunk(id));
  }, [dispatch, id]);

  const handleGameUpdate = () => {
    history.push(`/games/${id}/update`);
  };

  if (!game) return null;
  return (
    <div>
      <h1>{game.game_title}</h1>
      <img src={game.img} />
      <h1>{game.img}</h1>
      {gameOwner && (
        <div className="delete-box">
          <div>
            <div className="delete-game">
              <h1>Update Game</h1>
              <button onClick={handleGameUpdate}>Update Game</button>
              <h1>Delete Game</h1>
              <DeleteGame gameId={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleGame;
