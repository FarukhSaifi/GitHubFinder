import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="card col-md-6">
      <div className="card-body">
        <h4 className="card-title">{repo.name}</h4>
        <p className="card-text">{repo.name}</p>
      </div>
    </div>
  );
};
export default RepoItem;
