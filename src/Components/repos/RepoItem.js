import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div class="card col-md-6">
      <div class="card-body">
        <h4 class="card-title">{repo.name}</h4>
        <p class="card-text">{repo.name}</p>
      </div>
    </div>
  );
};
export default RepoItem;
