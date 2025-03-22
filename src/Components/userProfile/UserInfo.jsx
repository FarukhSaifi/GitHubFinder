import React from "react";
import { LuBuilding, LuLink, LuMapPin, LuTwitter } from "react-icons/lu";

const UserInfo = ({ user }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div className="flex items-center text-gray-600">
      <LuMapPin className="h-5 w-5 mr-2" />
      <span>{user.location || "Not specified"}</span>
    </div>
    {user.company && (
      <div className="flex items-center text-gray-600">
        <LuBuilding className="h-5 w-5 mr-2" />
        <span>{user.company}</span>
      </div>
    )}
    {user.blog && (
      <div className="flex items-center text-gray-600">
        <LuLink className="h-5 w-5 mr-2" />
        <a
          href={user.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          {user.blog}
        </a>
      </div>
    )}
    {user.twitter_username && (
      <div className="flex items-center text-gray-600">
        <LuTwitter className="h-5 w-5 mr-2" />
        <a
          href={`https://twitter.com/${user.twitter_username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          @{user.twitter_username}
        </a>
      </div>
    )}
  </div>
);

export default UserInfo;
