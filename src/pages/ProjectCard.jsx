import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{project.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{project.status}</span>
        <div className="w-24 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${project.completion}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
