import React from "react";
import Header from "./component/Header";
import MainRoutes from "./component/MainRoutes";
import Dashboard from "./pages/Dashboard";
import { Link } from "react-router-dom";

export default function App() {
  return (
        <div className="flex h-screen">
          <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col gap-4">
            <h2 className="text-xl font-bold mb-6">Menu</h2>
            <Link className="hover:text-gray-300" to="/">
              Dashboard
            </Link>
            <Link className="hover:text-gray-300" to="/profile">
              Profile
            </Link>
            <Link className="hover:text-gray-300" to="/settings">
              Settings
            </Link>
          </aside>
      <main className="flex-1 p-6">
        <MainRoutes />
      </main>
    </div>
  );
}
