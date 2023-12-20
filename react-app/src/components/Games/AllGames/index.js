import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../../store/game";
import { NavLink } from "react-router-dom";
import "./AllGames.css";

function AllGames() {
  const games = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();
  const [gamesToShow, setGamesToShow] = useState(10);
  const gamesPerBatch = 10;
  const [sortBy, setSortBy] = useState(""); // State for sorting
  const [sortedGames, setSortedGames] = useState([]);

  useEffect(() => {
    dispatch(getAllGamesThunk());
  }, [dispatch]);

  const allGames = Object.values(games);

  const handleAddToCart = () => {
    alert("Feature coming soon!");
  };

  const loadMoreGames = () => {
    setGamesToShow((prevGamesToShow) => prevGamesToShow + gamesPerBatch);
  };

  const sortAlphabetically = () => {
    const sortedGames = allGames
      .slice()
      .sort((a, b) => a.game_title.localeCompare(b.game_title));
    setSortBy("alphabetical");
    setSortedGames(sortedGames);
    setGamesToShow(10); // Reset the number of games to show
  };

  const sortByPrice = () => {
    const sortedGames = allGames.slice().sort((a, b) => a.price - b.price);
    setSortBy("price");
    setSortedGames(sortedGames);
    setGamesToShow(10); // Reset the number of games to show
  };

  const displayedGames = sortBy ? sortedGames : allGames;

  return (
    <div className="all-games-grid">
      <div className="sorting-options">
        <button onClick={sortAlphabetically}>Sort Alphabetically</button>
        <button onClick={sortByPrice}>Sort by Price</button>
      </div>
      {displayedGames.slice(0, gamesToShow).map((game) => (
        <div key={game.id} className="game-container">
          <div className="test-123">
            <div className="left-img">
              <img src={game.img} alt="default game image" className="photo" />
            </div>
            <div className="all-games-right-des">
              <div className="game-details">
                <NavLink to={`/games/${game.id}`} className="game-link">
                  <div className="game-title">{game.game_title}</div>
                </NavLink>
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
        </div>
      ))}
      {gamesToShow < allGames.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={loadMoreGames}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default AllGames;
