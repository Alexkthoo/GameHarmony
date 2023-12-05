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
import ManageGames from "./components/Games/ManageGames";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import CreateGameReviewForm from "./components/Reviews/CreateReviews";

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
          <ProtectedRoute exact path="/games/:id/reviews/new">
            <CreateGameReviewForm />
          </ProtectedRoute>
          <Route exact path="/games/:id/update">
            <UpdateGame />
          </Route>
          <Route exact path="/games/current">
            <ManageGames />
          </Route>
          <Route exact path="/games/new">
            <CreateGame />
          </Route>
          <Route exact path="/games/:id">
            <SingleGame />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/games">
            <AllGames />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
