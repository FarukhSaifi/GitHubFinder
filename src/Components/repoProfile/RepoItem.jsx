import React from "react";
import { LuGitFork, LuStar } from "react-icons/lu";

const RepoItem = ({ repo }) => {
  const handleClick = () => {
    window.open(repo.html_url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="rounded-lg p-4 transition-all duration-300 "
    >
      {/* Repo Name */}
      <h3 className="text-lg font-semibold text-indigo-600 hover:text-indigo-800">
        {repo.name}
      </h3>

      {/* Repo Description */}
      {repo.description && (
        <p className="text-gray-600 text-sm mt-2">{repo.description}</p>
      )}

      {/* Stars & Forks */}
      <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          <LuStar size={16} className="text-yellow-500" />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="flex items-center gap-1">
          <LuGitFork size={16} className="text-gray-500" />
          <span>{repo.forks_count}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
