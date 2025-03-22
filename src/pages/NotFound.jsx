import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400">
        404
      </h1>

      {/* Message */}
      <p className="text-lg text-gray-700 dark:text-gray-900 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        Go Home
      </Link>

      {/* Animated Logo */}
      <div className="mt-10 w-64 h-64 bg-indigo-100 dark:bg-indigo-800 rounded-full flex items-center justify-center animate-pulse">
        <span className="text-7xl font-bold text-indigo-600 dark:text-indigo-400">
          ?
        </span>
      </div>
    </div>
  );
}
