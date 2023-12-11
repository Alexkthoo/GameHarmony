import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteGameThunk } from "../../../store/game";

function DeleteGame({ gameId }) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const yesbutton = async () => {

    await dispatch(deleteGameThunk(gameId));
    history.push(`/games`);
  };

  return (
    <>
      <div id="delete-game">
        {/* <h2>Are you sure you want to remove this game from the listings?</h2> */}
        <div id="delete-game-button">
          <button id="top-button-delete" onClick={yesbutton}>
            Yes (Delete Game)
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteGame;
