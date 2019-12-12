import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./Components/layouts/AppNavbar";
import Home from "./Components/layouts/Home";
import Alert from "./Components/layouts/Alert";
import About from "./pages/About";
import User from "./Components/users/User";
import GithubState from "./Components/context/github/GithubState";
import AlertState from "./Components/context/alert/AlertState";
import NotFound from "./Components/layouts/NotFound";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
