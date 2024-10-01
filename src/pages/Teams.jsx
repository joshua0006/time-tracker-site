import React from "react";
import { useTheme } from "../ThemeContext";

const TeamMemberCard = ({ member }) => {
  const { darkMode } = useTheme();

  // Generate a random avatar URL using pravatar.cc
  const avatarUrl = `https://i.pravatar.cc/300?img=${Math.floor(
    Math.random() * 70
  )}`;

  return (
    <div
      className={`relative rounded-lg overflow-hidden shadow-md ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <img
        src={avatarUrl}
        alt={member.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            member.name
          )}&background=random`;
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold">{member.name}</h3>
        <p className="text-sm">{member.role}</p>
      </div>
      <div
        className={`absolute top-2 right-2 ${
          darkMode ? "text-gray-300" : "text-gray-700"
        }`}
      >
        <a
          href={`https://linkedin.com/in/${member.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Teams = () => {
  const { darkMode } = useTheme();
  const teamMembers = [
    {
      name: "Juliet Smith",
      role: "Team Leader",
      linkedin: "juliet-smith",
    },
    {
      name: "Andrew Davis",
      role: "Analyst",
      linkedin: "andrew-davis",
    },
    {
      name: "Emma Johnson",
      role: "Developer",
      linkedin: "emma-johnson",
    },
    {
      name: "Michael Chen",
      role: "Designer",
      linkedin: "michael-chen",
    },
    {
      name: "Sarah Williams",
      role: "Product Manager",
      linkedin: "sarah-williams",
    },
    {
      name: "David Brown",
      role: "Marketing Specialist",
      linkedin: "david-brown",
    },
    {
      name: "Lisa Taylor",
      role: "UX Researcher",
      linkedin: "lisa-taylor",
    },
    {
      name: "James Wilson",
      role: "Data Scientist",
      linkedin: "james-wilson",
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">Teams</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default Teams;
