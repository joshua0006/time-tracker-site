import React from "react";

const Projects = () => {
  const projects = [
    { id: 1, name: "Project A", status: "In Progress", completion: 60 },
    { id: 2, name: "Project B", status: "On Hold", completion: 30 },
    { id: 3, name: "Project C", status: "Completed", completion: 100 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Projects</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.id} className="flex items-center justify-between">
            <div>
              <span className="font-medium">{project.name}</span>
              <span className="ml-2 text-xs text-gray-500">
                {project.status}
              </span>
            </div>
            <div className="w-24 bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${project.completion}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
