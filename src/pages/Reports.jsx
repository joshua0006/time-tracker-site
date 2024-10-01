import React from "react";
import { useTheme } from "../ThemeContext";

const Reports = () => {
  const { darkMode } = useTheme();
  const reportTypes = [
    {
      name: "Time & Activity",
      description: "Overview of time spent and activity levels",
    },
    {
      name: "Project",
      description: "Detailed reports on project progress and time allocation",
    },
    { name: "Team", description: "Team performance and productivity metrics" },
    { name: "Payroll", description: "Payroll reports based on time tracked" },
    {
      name: "Invoice",
      description: "Generate invoices based on billable hours",
    },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Reports</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reportTypes.map((report, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">{report.name}</h2>
            <p
              className={`text-sm mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {report.description}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
              Generate Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reports;
