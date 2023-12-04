import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/Games/LandingPage";
import AllGames from "./components/Games/AllGames";
import CreateGame from "./components/Games/CreateGames";
import SingleGame from "./components/Games/EachGame";
import UpdateGame from "./components/Games/UpdateGames";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/games">
            <AllGames />
          </Route>
          <Route exact path="/games/new">
            <CreateGame />
          </Route>
          <Route exact path="/games/:id">
            <SingleGame />
          </Route>
          <Route exact path="/games/:id/update">
            <UpdateGame />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
