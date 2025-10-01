import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-8 w-full md:w-auto">
          <img className="w-[100px] mr-[30px]" src="/netflix.png" alt="" />
          <nav className="">
              <Link
                to="/"
                className="hover:text-gray-300 transition-colors cursor-pointer"
              >
                Home
              </Link>
              <Link to='/about' className="hover:text-gray-300 transition-colors cursor-pointer">
                About Us
              </Link>
              <Link to='/some-pages' className="hover:text-gray-300 transition-colors cursor-pointer">
                Price
              </Link>
          </nav>
        </div>
        <input
          className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 w-[400px]"
          type="search"
          placeholder="Enter movie..."
        />
      </header>
    </>
  );
}
