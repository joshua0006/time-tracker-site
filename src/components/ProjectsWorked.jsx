import React from "react";

const ProjectsWorked = () => {
  const projects = [
    { name: "Project A", hours: 12 },
    { name: "Project B", hours: 8 },
    { name: "Project C", hours: 15 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Projects Worked</h2>
      <ul className="space-y-2">
        {projects.map((project) => (
          <li key={project.name} className="flex justify-between items-center">
            <span>{project.name}</span>
            <span className="text-sm text-gray-500">{project.hours}h</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsWorked;
