import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import GithubReducer from "./githubReducer.jsx";

const GithubContext = createContext();

import {
  CLEAR_USER,
  GET_REPOS,
  GET_USER,
  SEARCH_USERS,
  SET_LOADING,
} from "../types.js";

const GithubState = ({ children }) => {
  const initialState = {
    users: [],
    repos: [],
    user: null,
    loading: false,
    error: null,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // search Users
  const searchUsers = async (search) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    console.log(response);
    dispatch({ type: SEARCH_USERS, payload: response.data.items });
  };

  // get USer
  const getUser = async (username) => {
    setLoading();
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(response.data);
    dispatch({ type: GET_USER, payload: response.data });
  };

  // Get Repos
  const getUserRepos = async (userrepos) => {
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
        searchUsers,
        ClearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
export default GithubState;

export const useGitHubContext = () => {
  const context = useContext(GithubContext);

  if (context === undefined) {
    throw new Error("useGitHubContext must be used within an GitHubProvider");
  }

  return context;
};
