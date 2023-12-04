import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createGameThunk } from "../../../store/game";

function CreateGame() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [gameTitle, setGameTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [developer, setDeveloper] = useState("");
  const [publisher, setPublisher] = useState("");
  const [aboutGame, setAboutGame] = useState("");
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState("");
  const [systemSupport, setSystemSupport] = useState("");
  const [errors, setErrors] = useState([]);
  const [validationObject, setValidationObject] = useState({});
  const [imageLoading, setImageLoading] = useState(false);
  const [submitted, yesSubmitted] = useState(false);

  useEffect(() => {
    yesSubmitted(false);
    setErrors({});
  }, [submitted]);

  const systems = ["PS5", "Switch", "PC Master Race"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errorList = {};

    if (!gameTitle.length || gameTitle.length > 100)
      errorList.gameTitle = "Game Title must be between 1 and 100 characters";
    if (!price.length || price < 0) errorList.price = "Price must be above $0";
    if (!developer) errorList.developer = "Developer Field require";
    if (!publisher) errorList.publisher = "Publisher Field require";
    if (!aboutGame.length || aboutGame.length > 500)
      errorList.aboutGame =
        "Note's About Game must be between 1 and 501 characters";
    if (!description.length || description.length > 500)
      errorList.description =
        "Note's Description must be between 1 and 501 characters";
    if (!systemSupport)
      errorList.systemSupport = "System Support Field require";
    if (!img)
      errorList.img =
        "Please add a preview image (.jpg, .jpeg, .png, .gif, .pdf)";

    if (Object.values(errorList).length > 0) {
      setErrors(errorList);
      return;
    }

    const form = new FormData();
    form.append("game_title", gameTitle);
    form.append("price", price);
    form.append("developer", developer);
    form.append("publisher", publisher);
    form.append("about_game", aboutGame);
    form.append("description", description);
    form.append("img", img);
    form.append("system_support", systemSupport);

    setImageLoading(true);

    try {
      const response = await dispatch(createGameThunk(form));
      console.log("🚀 ~ file: index.js:74 ~ dispatch ~ form:", form);
      console.log("🚀 ~ file: index.js:75 ~ dispatch ~ res:", response);

      setImageLoading(false);

      if (response && response.errors) {
        setErrors(response.errors);
      } else {
        history.push(`/games`);
        yesSubmitted(true);
        // reset()
        return "success";
      }
    } catch (error) {
      console.error("Error during API call:", error);
      setImageLoading(false);
      // Handle the error as needed (e.g., display an error message to the user)
    }
  };

  return (
    <>
      <h1>CREATE MI GAMEEEEEEEEEEE PLEASE</h1>
      <form
        className="game-form"
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
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
          <input
            type="text"
            placeholder="publisher"
            value={aboutGame}
            onChange={(e) => setAboutGame(e.target.value)}
          />

          {errors.aboutGame && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.aboutGame}
            </p>
          )}
        </div>

        <div>
          <label className="label">Description</label>

          <textarea
            type="textarea"
            placeholder="Description of game"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="description-field"
          />

          {errors.description && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.description}
            </p>
          )}
        </div>

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
            {systems.map((systemsOption) => (
              <option key={systemsOption} value={systemsOption}>
                {systemsOption}
              </option>
            ))}
          </select>

          {errors.systemSupport && (
            <p style={{ fontSize: "10px", color: "red" }}>
              *{errors.systemSupport}
            </p>
          )}
        </div>

        <div>
          <label className="label">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
            className=""
          />

          {errors.img && (
            <p style={{ fontSize: "10px", color: "red" }}>*{errors.img}</p>
          )}
        </div>

        <div className="create-button">
          <button type="submit">Add Game</button>
        </div>
        {imageLoading && <p>Loading...</p>}
      </form>
    </>
  );
}

export default CreateGame;
