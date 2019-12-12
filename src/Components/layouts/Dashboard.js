import React, { useContext } from "react";
import UsersItem from "../users/UsersItem";
import Spinner from "./Spinner";
import GithubContext from "../context//github/githubContext";

const Dashboard = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="row">
        {users.map(user => (
          <UsersItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Dashboard;
