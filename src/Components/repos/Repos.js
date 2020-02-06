import React, { Fragment } from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
  return (
    <Fragment>
      <div className="my-3">
        <h2>Repos</h2>
      </div>
      <div className="d-flex flex-wrap ">
        {repos.map(repo => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </Fragment>
  );
};
export default Repos;
