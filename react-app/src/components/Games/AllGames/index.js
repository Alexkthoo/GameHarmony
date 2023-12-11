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

  const handleAddToCart = () => {
    alert("Feature coming soon!");
  };

  return (
    <div className="all-games-grid">
      {allGames.map((game) => (
        <NavLink key={game.id} to={`/games/${game.id}`} className="game-link">
          <div className="test-123">
            <div className="left-img">
              <img src={game.img} alt="default game image" className="photo" />
            </div>
            <div className="all-games-right-des">
              <div className="game-details">
                <div className="game-title">{game.game_title}</div>
              </div>
              <div className="game-desc">{game.about_game}</div>
              <div className="game-price">
                ${game.price}
                <button className="add-to-cart" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default AllGames;
