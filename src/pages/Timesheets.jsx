import React, { useState } from "react";
import { useTheme } from "../ThemeContext";

// Define Timesheet component within the same file
const Timesheet = () => {
  const { darkMode } = useTheme();
  const entries = [
    { id: 1, project: "Project A", task: "Design", hours: 3 },
    { id: 2, project: "Project B", task: "Development", hours: 5 },
    { id: 3, project: "Project C", task: "Testing", hours: 2 },
  ];

  return (
    <div
      className={` p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Timesheet</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left">
            <th>Project</th>
            <th>Task</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.project}</td>
              <td>{entry.task}</td>
              <td>{entry.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const TimesheetsPage = () => {
  const [weekStart, setWeekStart] = useState(new Date());
  const { darkMode } = useTheme();

  const handlePreviousWeek = () => {
    setWeekStart((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() - 7);
      return newDate;
    });
  };

  const handleNextWeek = () => {
    setWeekStart((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + 7);
      return newDate;
    });
  };

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Timesheets</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePreviousWeek}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ${
            darkMode ? "hover:bg-blue-600" : "hover:bg-blue-400"
          }`}
        >
          Previous Week
        </button>
        <span className="text-lg font-semibold">
          Week of {weekStart.toLocaleDateString()}
        </span>
        <button
          onClick={handleNextWeek}
          className={`bg-blue-500 text-white px-4 py-2 rounded-md transition-colors duration-300 ${
            darkMode ? "hover:bg-blue-600" : "hover:bg-blue-400"
          }`}
        >
          Next Week
        </button>
      </div>
      <Timesheet />
    </div>
  );
};

export default TimesheetsPage;
