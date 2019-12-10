import React, { Fragment, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppNavbar from "./Components/layouts/AppNavbar";
import Dashboard from "./Components/layouts/Dashboard";
import Search from "./Components/layouts/Search";
import axios from "axios";
import Alert from "./Components/layouts/Alert";
import About from "./pages/About";
import User from "./Components/users/User";
import GithubState from "./Components/context/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Load USers
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const response = await axios.get("https://api.github.com/users");
  //   console.log(response.data);
  //   this.setState({ users: response.data, loading: false });
  // }

  // Search Users

  // Clear USers
  const ClearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Get User
  const getUser = async username => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response);
    setUser(response.data);
  };

  // Get Repos
  const getUserRepos = async userrepos => {
    setLoading(true);
    const response = await axios.get(
      `https://api.github.com/users/${userrepos}/repos?per_page=5&sort=created:asc`
    );
    console.log(response);
    setRepos(response.data);
    setLoading(false);
  };

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
                    <Search
                      ClearUsers={ClearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={showAlert}
                    />
                    <Dashboard users={users} loading={loading} />
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={props => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    repos={repos}
                    user={user}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
