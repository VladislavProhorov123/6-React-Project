import React from "react";
import Header from "./component/Header";
import MainRoutes from "./component/MainRoutes";
import Dashboard from "./pages/Dashboard";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <header>
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
      </header>
      <MainRoutes />
    </div>
  );
}
