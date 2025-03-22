import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../Components/ui/LoadingSpinner.jsx";
import UserInfo from "../Components/userProfile/UserInfo.jsx";
import UserStats from "../Components/userProfile/UserStats.jsx";
import { useGitHubContext } from "../context/github/GithubState.jsx";

export default function Profile() {
  const { username } = useParams();
  const githubContext = useGitHubContext();
  const { user, loading, getUser, getUserRepos } = githubContext;

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
  // if (error) return <ErrorMessage message={error} />;
  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3">
            <img
              src={user.avatar_url}
              alt={user.name || user.login}
              className="w-full h-auto"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <h1 className="text-3xl font-bold mb-2">
              {user.name || user.login}
            </h1>
            {user.bio && <p className="text-gray-600 mb-4">{user.bio}</p>}
            <UserInfo user={user} />
            <UserStats user={user} />
          </div>
        </div>
      </div>
    </div>
  );
}
