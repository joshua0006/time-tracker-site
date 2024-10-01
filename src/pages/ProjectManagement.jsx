import React from "react";
import { useTheme } from "../ThemeContext";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Define ProjectCard component within the same file
const ProjectCard = ({ project }) => {
  const { darkMode } = useTheme();
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const data = [
    { name: "Completed", value: project.completion },
    { name: "Remaining", value: 100 - project.completion },
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p
        className={`text-sm mb-4 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>
      <div className="flex justify-between items-center mb-4">
        <span
          className={`text-sm font-medium ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {project.status}
        </span>
        <span
          className={`text-sm font-medium ${
            project.completion === 100 ? "text-green-500" : "text-blue-500"
          }`}
        >
          {project.completion}% Complete
        </span>
      </div>
      <ResponsiveContainer width="100%" height={100}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={40}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

const ProjectOverview = ({ projects }) => {
  const { darkMode } = useTheme();

  const data = projects.map((project) => ({
    name: project.name,
    completion: project.completion,
  }));

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="completion" fill="#8884d8" name="Completion %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const ProjectManagement = () => {
  const { darkMode } = useTheme();

  // Array of possible project descriptions
  const projectDescriptions = [
    "Developing a new mobile application for task management",
    "Redesigning the company's website for better user experience",
    "Implementing a machine learning algorithm for data analysis",
    "Creating a new customer relationship management system",
    "Optimizing the backend infrastructure for improved performance",
    "Developing an IoT solution for smart home devices",
    "Building a new e-commerce platform with advanced features",
    "Implementing a blockchain-based supply chain management system",
    "Creating a virtual reality training program for employees",
    "Developing a cross-platform desktop application for video editing",
  ];

  // Function to get a random description
  const getRandomDescription = () => {
    return projectDescriptions[
      Math.floor(Math.random() * projectDescriptions.length)
    ];
  };

  const projects = [
    {
      id: 1,
      name: "Project A",
      description: getRandomDescription(),
      status: "In Progress",
      completion: 60,
    },
    {
      id: 2,
      name: "Project B",
      description: getRandomDescription(),
      status: "On Hold",
      completion: 30,
    },
    {
      id: 3,
      name: "Project C",
      description: getRandomDescription(),
      status: "Completed",
      completion: 100,
    },
    {
      id: 4,
      name: "Project D",
      description: getRandomDescription(),
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
      <h1 className="text-2xl font-bold mb-6">Project Management</h1>
      <ProjectOverview projects={projects} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectManagement;
