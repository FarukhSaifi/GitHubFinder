import { LoadingSpinner } from "../Components/ui/LoadingSpinner.jsx";
import { UserCard } from "../Components/userProfile/UserCard.jsx";
import { useGitHubContext } from "../context/github/GithubState.jsx";

export default function Dashboard() {
  const githubContext = useGitHubContext();
  const { users, loading, error } = githubContext;

  console.log(users, loading, error);
  if (loading) return <LoadingSpinner />;
  // if (error) return <ErrorMessage message={error} />;
  if (users.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        No users found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
