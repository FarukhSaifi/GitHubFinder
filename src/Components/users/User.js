import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div className="justify-content-between">
        <Link to="/" className="btn btn-light mx-2">
          <i className="fas fa-arrow-left m-1" />
          Back To Search
        </Link>
        {hireable ? (
          <span className="badge p-2 badge-pill badge-success">
            Hire Me <i className="fas fa-check"></i>
          </span>
        ) : (
          <span className="badge p-2 badge-pill badge-danger">
            Not Available <i className="fas fa-times-circle"></i>
          </span>
        )}
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img
              className="card-img-top rounded"
              src={avatar_url}
              alt={login}
            />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              {bio && <p className="card-text">{bio}</p>}
            </div>
          </div>
        </div>
        <div className=" card col-md-8">
          <div className="text-right m-2">
            <i className="fas fa-location-arrow text-secondary m-1"></i>{" "}
            {location}
          </div>
          <div className="m-3">
            <a href={blog}>
              <i className="fas fa-globe text-info"></i> {blog}
            </a>
          </div>
          <a href={html_url} className="btn btn-dark m-2">
            Visit GitHub Profile
          </a>
        </div>
      </div>
      <div className=" text-center d-flex justify-content-end ">
        <div class="badge p-2 badge-pill badge-success">
          Follower: {followers}
        </div>
        <div class="badge p-2 badge-pill badge-info">
          Following: {following}
        </div>
        <div class="badge p-2 badge-pill badge-primary">
          Public Repos: {public_repos}
        </div>
        <div class="badge p-2 badge-pill badge-danger">
          Public Gists: {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
export default User;
