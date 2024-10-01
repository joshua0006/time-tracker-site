import React from "react";
import { useTheme } from "../ThemeContext";

const Header = ({ searchTerm, setSearchTerm }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={` transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white"
      } shadow-sm p-4`}
    >
      <div className="flex justify-between items-center">
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className={`px-4 py-2 border rounded-md transition-all duration-300 ${
              darkMode
                ? "bg-gray-700 text-white placeholder-gray-400"
                : "bg-white text-black placeholder-gray-500"
            }`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            New Project
          </button>
          <button
            onClick={toggleDarkMode}
            className={`px-4 py-2 rounded-md ${
              darkMode ? "bg-gray-600" : "bg-gray-200"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </button>
          <div className="flex items-center space-x-2">
            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
              John Doe
            </span>
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
