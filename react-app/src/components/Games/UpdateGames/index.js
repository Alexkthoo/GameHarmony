import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneGameThunk, updateGameThunk } from "../../../store/game";
import { useHistory } from "react-router-dom";
import "./UpdateGames.css";

const UpdateGame = () => {
  const { id } = useParams();
  const [gameTitle, setGameTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [aboutGame, setAboutGame] = useState("");

  const [description, setDescription] = useState("");
  const [systemSupport, setSystemSupport] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationObject, setValidationObject] = useState({});

  const [submitted, yesSubmitted] = useState(false);
  const game = useSelector((state) => state.games.allGames);
  const dispatch = useDispatch();
  const history = useHistory();

  const system = ["PS5", "Switch", "PC Master Race"];

  useEffect(() => {
    dispatch(getOneGameThunk(id)).then((response) => {
      setGameTitle(response.game_title);
      setPrice(response.price);
      setDeveloper(response.developer);
      setPublisher(response.publisher);
      setAboutGame(response.about_game);
      setDescription(response.description);
      setSystemSupport(response.system_support);
    });
  }, [dispatch, id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorList = {};

    if (!gameTitle.length || gameTitle.length > 100)
      errorList.gameTitle = "Game Title must be between 1 and 100 characters";
    if (!price || price < 0) errorList.price = "Price must be above $0";
    if (!developer) errorList.developer = "Developer Field require";
    if (!publisher) errorList.publisher = "Publisher Field require";
    if (!aboutGame.length || aboutGame.length > 500)
      errorList.aboutGame =
        "Note's About Game must be between 1 and 501 characters";
    // if (!description.length || description.length > 500)
    //   errorList.description =
    //     "Note's Description must be between 1 and 501 characters";
    if (!systemSupport)
      errorList.systemSupport = "System Support Field require";

    if (Object.values(errorList).length > 0) {
      setErrors(errorList);
      return;
    }

    const form = new FormData();
    form.append("game_title", gameTitle);
    form.append("price", parseFloat(price));
    form.append("developer", developer);
    form.append("publisher", publisher);
    form.append("about_game", aboutGame);
    form.append("description", description);
    form.append("system_support", systemSupport);
    dispatch(updateGameThunk(form, id)).then((res) => {
      if (res.errors) {
        setErrors(res.errors);
      } else {
        history.push(`/games/${id}`);
        yesSubmitted(true);
        // reset()
        return "success";
      }
    });
  };

  return (
    <div className="update-game-container">
      <h1>Update Game Information</h1>
      <div>
        <form className="game-form" onSubmit={handleSubmit}>
          <div>
            <label className="label">Game Title</label>
            <input
              type="text"
              placeholder="Game Title"
              value={gameTitle}
              onChange={(e) => setGameTitle(e.target.value)}
            />

            {errors.gameTitle && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.gameTitle}
              </p>
            )}
          </div>

          <div>
            <label className="label">Price</label>
            <input
              type="number"
              step="0.01"
              placeholder="Price of Game"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="0"
              className=""
            />

            {errors.price && (
              <p style={{ fontSize: "10px", color: "red" }}>*{errors.price}</p>
            )}
          </div>

          <div>
            <label className="label">Developer</label>
            <input
              type="text"
              placeholder="Developer"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />

            {errors.developer && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.developer}
              </p>
            )}
          </div>

          <div>
            <label className="label">publisher</label>
            <input
              type="text"
              placeholder="publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />

            {errors.publisher && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.publisher}
              </p>
            )}
          </div>

          <div>
            <label className="label">About Game</label>
            <textarea
              type="textarea"
              placeholder="publisher"
              value={aboutGame}
              onChange={(e) => setAboutGame(e.target.value)}
              className="update-games-description-field"
            />

            {errors.aboutGame && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.aboutGame}
              </p>
            )}
          </div>

          {/* <div>
            <label className="label">Description</label>

            <textarea
              type="textarea"
              placeholder="Description of Game"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="update-games-description-field"
            />

            {errors.description && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.description}
              </p>
            )}
          </div> */}

          <div>
            <label className="label">System Support</label>
            <select
              value={systemSupport}
              onChange={(e) => setSystemSupport(e.target.value)}
              className=""
            >
              <option value="" disabled>
                Select the system that supports this game!
              </option>
              {system.map((systemOption) => (
                <option key={systemOption} value={systemOption}>
                  {systemOption}
                </option>
              ))}
            </select>

            {errors.systemSupport && (
              <p style={{ fontSize: "10px", color: "red" }}>
                *{errors.systemSupport}
              </p>
            )}
          </div>

          <div className="update-game-button">
            <button className="update-game-button" type="submit">
              Update Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateGame;
