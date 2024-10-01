import React from "react";
import { useTheme } from "../ThemeContext";

// Define ProjectCard component within the same file
const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p
        className={`text-sm mb-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>
      <div className="flex justify-between items-center">
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.status}
        </span>
        <div
          className={`w-24 rounded-full h-2.5 ${
            darkMode ? "bg-gray-600" : "bg-gray-200"
          }`}
        >
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${project.completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const ProjectManagement = () => {
  const { darkMode } = useTheme();
  const projects = [
    {
      id: 1,
      name: "Project A",
      description: "A brief description of Project A",
      status: "In Progress",
      completion: 60,
    },
    {
      id: 2,
      name: "Project B",
      description: "A brief description of Project B",
      status: "On Hold",
      completion: 30,
    },
    {
      id: 3,
      name: "Project C",
      description: "A brief description of Project C",
      status: "Completed",
      completion: 100,
    },
    {
      id: 4,
      name: "Project D",
      description: "A brief description of Project D",
      status: "Planning",
      completion: 10,
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Project Management</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
