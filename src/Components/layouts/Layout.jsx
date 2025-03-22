import React from "react";
import { LuGithub } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
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
                <Link to="/about" className="hover:text-gray-300">
                  About
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
