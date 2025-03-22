import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGitHubContext } from "../context/github/GithubState";

export const useGithubSearch = () => {
  const [query, setQuery] = useState("");
  const { searchUsers } = useGitHubContext();
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query?.trim()) {
      await searchUsers(query);
      navigate("/dashboard");
    }
  };

  return {
    query,
    setQuery,
    handleSearch,
  };
};
