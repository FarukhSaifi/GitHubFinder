import React from "react";
import RepoItem from "./RepoItem.jsx";

const Repos = ({ repos }) => {
  if (!repos || repos.length === 0)
    return (
      <div className="my-6">
        <h2 className="text-2xl font-bold mb-4">Repositories</h2>
        <p className="flex justify-center animate-pulse">
          No repositories found.
        </p>
      </div>
    );

  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold mb-4">Repositories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a
            href={repo.html_url}
            key={repo.id}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 rounded-lg p-4 transition-all duration-300 hover:shadow-lg hover:border-indigo-500"
          >
            <RepoItem repo={repo} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Repos;
