import React from "react";
import { LuGithub, LuLogIn, LuLogOut, LuUserPlus } from "react-icons/lu";
import { Link, Navigate, Outlet } from "react-router-dom";

export default function Layout() {
  // const { user } = useAppSelector((state) => state.auth);

  const handleSignOut = async () => {
    // await dispatch(signOut());
    Navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <LuGithub className="h-8 w-8" />
              <span className="text-xl font-bold">GitHub Finder</span>
            </Link>
            <div className="space-x-6 flex items-center">
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>

              <>
                <Link to="/dashboard" className="hover:text-gray-300">
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-1 hover:text-gray-300"
                >
                  <LuLogOut className="h-5 w-5" />
                  <span>Sign Out</span>
                </button>
              </>

              <>
                <Link
                  to="/signin"
                  className="flex items-center space-x-1 hover:text-gray-300"
                >
                  <LuLogIn className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1 hover:text-gray-300"
                >
                  <LuUserPlus className="h-5 w-5" />
                  <span>Sign Up</span>
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
