import React from "react";
import { Link } from "react-router-dom";

export const UserCard = ({ user }) => (
  <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform hover:scale-105">
    <img
      src={user.avatar_url}
      alt={user.login}
      className="w-full h-50 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">{user.login}</h2>
      <Link
        to={`/profile/${user.login}`}
        className="btn-primary flex justify-center px-4 py-2 transition-colors"
      >
        View Profile
      </Link>
    </div>
  </div>
);
