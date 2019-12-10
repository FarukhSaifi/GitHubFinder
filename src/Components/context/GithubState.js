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
    SetLoading();
    const response = await axios.get(
      `https://api.github.com/search/users?q=${search}`
    );
    console.log(response);
    dispatch({ type: SEARCH_USERS, payload: response.data });
  };

  // get USer

  // Get Repos

  // Clear users

  // set Loading
  const SetLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        SearchUser
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
