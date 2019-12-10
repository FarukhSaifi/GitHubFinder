import React from "react";
import UsersItem from "../users/UsersItem";
import Spinner from "./Spinner";

const Dashboard = ({ loading, users }) => {
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
