import React, { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./Components/layouts/AppNavbar";
import Dashboard from "./Components/layouts/Dashboard";
import Search from "./Components/layouts/Search";
import Alert from "./Components/layouts/Alert";
import About from "./pages/About";
import User from "./Components/users/User";
import GithubState from "./Components/context/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  // Alert
  const showAlert = ({ msg, type }) => {
    setTimeout(() => {
      setAlert(null);
    }, 3000);
    setAlert({ msg, type });
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <AppNavbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Dashboard />
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
