import React from "react";
import { LuSearch } from "react-icons/lu";
import { useGithubSearch } from "../../hooks/useGithubSearch";

export default function Home() {
  const { query, setQuery, handleSearch } = useGithubSearch();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Find GitHub Users
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Search users and explore their profiles
      </p>
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GitHub users..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12 shadow-sm hover:shadow-md transition-shadow"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <LuSearch className="h-6 w-6" />
          </button>
        </div>
      </form>
    </div>
  );
}
