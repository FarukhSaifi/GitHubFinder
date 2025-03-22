import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
    <img
      src={user.avatar_url}
      alt={user.login}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{user.login}</h2>
      <Link
        to={`/profile/${user.login}`}
        className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        View Profile
      </Link>
    </div>
  </div>
);
