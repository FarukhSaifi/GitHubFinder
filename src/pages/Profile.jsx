import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Repos from "../Components/repoProfile/Repos.jsx";
import { LoadingSpinner } from "../Components/ui/LoadingSpinner.jsx";
import UserInfo from "../Components/userProfile/UserInfo.jsx";
import UserStats from "../Components/userProfile/UserStats.jsx";
import { useGitHubContext } from "../context/github/GithubState.jsx";

export default function Profile() {
  const { username } = useParams();
  const githubContext = useGitHubContext();
  const { user, repos, loading, getUser, getUserRepos } = githubContext;

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        await getUser(username);
        await getUserRepos(username);
      }
    };

    fetchData();
  }, [username]);

  if (loading) return <LoadingSpinner />;
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-indigo-500 transition-all duration-300">
        <div className="md:flex">
          {/* User Avatar */}
          <div className="relative md:w-1/3 flex justify-center">
            {/* User Avatar */}
            <img
              src={user.avatar_url}
              alt={user.name || user.login}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* GitHub Profile Button - Overlay */}
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 btn-primary w-11/12"
            >
              View GitHub Profile →
            </a>
          </div>

          {/* User Details */}
          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">
              {user.name || user.login}
            </h1>
            {user.bio && <p className="text-gray-600 mb-2">{user.bio}</p>}

            <UserInfo user={user} />
            <UserStats user={user} />
          </div>
        </div>
      </div>

      {/* Repositories */}
      <Repos repos={repos} />
    </div>
  );
}
