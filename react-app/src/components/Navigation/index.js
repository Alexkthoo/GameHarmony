import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useHistory } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const history = useHistory();
  const location = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const sessionUser = useSelector((state) => state.session.user);
  const businessOwner = sessionUser;

  const linkColor = location.pathname === "/" ? "blue" : "red";

  return (
    <>
      <div id="upper-half-homepage">
        <div id="top-nav">
          <div id="kelp-logo">
            <NavLink exact to="/">
              <div className="logo-container">
                <h1>GameHarmony</h1>
                <img
                  id="kelp-image"
                  src="https://i.pinimg.com/originals/3a/e7/52/3ae7525b898c8a82210799255f72ec61.gif"
                  alt="Kelp Logo"
                />
              </div>
            </NavLink>{" "}
          </div>

          <div id="homepage-buttons">
            {sessionUser ? (
              // <div className="login-dropdown">
              //   {isLoaded && <BusinessButton user={sessionUser} />}
              // </div>
              <NavLink exact to="/games/new" style={{ color: linkColor }}>
                Create a New Game
              </NavLink>
            ) : null}
            <div className="all-games">
              <NavLink exact to="/games" style={{ color: linkColor }}>
                View All Games
              </NavLink>
            </div>
            {/* <button id="write-review-button">Write a Review</button> */}
            <div className="login-dropdown">
              {isLoaded && (
                // <li>
                <ProfileButton user={sessionUser} />
                // </li>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
