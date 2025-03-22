import React from "react";

const UserStats = ({ user }) => (
  <div className="grid grid-cols-3 gap-4 text-center">
    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
      <div className="text-2xl font-bold">{user.public_repos}</div>
      <div className="text-gray-600">Repositories</div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
      <div className="text-2xl font-bold">{user.followers}</div>
      <div className="text-gray-600">Followers</div>
    </div>
    <div className="bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition-colors">
      <div className="text-2xl font-bold">{user.following}</div>
      <div className="text-gray-600">Following</div>
    </div>
  </div>
);

export default UserStats;
