import React from "react";
import { useTheme } from "../ThemeContext";

const Teams = () => {
  const { darkMode } = useTheme();
  const teamMembers = [
    {
      name: "John Doe",
      role: "Project Manager",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      role: "Developer",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Mike Johnson",
      role: "Designer",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Sarah Williams",
      role: "QA Tester",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Chris Brown",
      role: "Developer",
      avatar: "https://via.placeholder.com/50",
    },
    {
      name: "Emily Davis",
      role: "Marketing Specialist",
      avatar: "https://via.placeholder.com/50",
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow flex items-center transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h2 className="text-lg font-semibold">{member.name}</h2>
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
