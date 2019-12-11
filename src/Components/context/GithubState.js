import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./githubReducer";
import GithubContext from "./githubContext";

import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USER,
  GET_REPOS,
  SET_LOADING
} from "./types";

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search Users
  const SearchUser = async search => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    console.log(response);
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  // get USer
  const getUser = async username => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response.data);
    dispatch({ type: GET_USER, payload: response.data });
  };

  // Get Repos
  const getUserRepos = async userrepos => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${userrepos}/repos?per_page=5&sort=created:asc`
    );
    console.log(response);
    dispatch({ type: GET_REPOS, payload: response.data });
  };

  // Clear users
  const ClearUsers = () => dispatch({ type: CLEAR_USER });

  // set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUser,
        ClearUsers,
        getUser,
        getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
