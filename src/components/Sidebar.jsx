import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";

const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();
  const { darkMode } = useTheme();

  const menuItems = [
    { name: "Dashboard", icon: "📊", path: "/" },
    { name: "Timesheets", icon: "⏱️", path: "/timesheets" },
    { name: "Activity", icon: "📈", path: "/activity" },
    { name: "Insights", icon: "💡", path: "/insights" },
    { name: "Project management", icon: "📁", path: "/projects" },
    { name: "Calendar", icon: "📅", path: "/calendar" },
    { name: "Reports", icon: "📄", path: "/reports" },
    { name: "Teams", icon: "👥", path: "/teams" },
    { name: "Financials", icon: "💰", path: "/financials" },
  ];

  return (
    <div
      className={`${
        darkMode ? "bg-gray-900" : "bg-white"
      } text-black h-screen ${
        isCollapsed ? "w-16" : "w-64"
      } space-y-6 py-7 px-2 absolute inset-y-0 left-0 transition-all duration-300 ease-in-out overflow-hidden`}
    >
      <div className="flex items-center justify-between px-4">
        <span
          className={`text-2xl font-extrabold transition-opacity transition-width duration-300 ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"
          } ${darkMode ? "text-white" : "text-black"}`}
        >
          Timesheet
        </span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-full hover:bg-gray-700 focus:outline-none focus:ring z-10"
        >
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>
      <nav>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`block py-2.5 px-4 rounded transition-all duration-300 ease-in-out whitespace-nowrap ${
              location.pathname === item.path
                ? darkMode
                  ? "bg-gray-600 text-white" // Dark mode: selected item
                  : "bg-gray-700 text-white" // Light mode: selected item
                : darkMode
                ? "bg-gray-900 text-gray-300 hover:bg-gray-700" // Dark mode: unselected item
                : "bg-white text-black hover:bg-gray-200" // Light mode: unselected item
            }`}
            title={isCollapsed ? item.name : ""}
          >
            <span className="inline-block w-6 transition-colors duration-300">
              {item.icon}
            </span>
            <span
              className={`ml-2  ${
                isCollapsed ? "opacity-0 w-0" : "opacity-100 inline-block"
              } `}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
