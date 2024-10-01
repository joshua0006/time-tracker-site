import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Timesheet = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Weekly Timesheet</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
              color: darkMode ? "#FFFFFF" : "#000000",
              border: "none",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <Bar dataKey="Project A" stackId="a" fill="#8884d8" />
          <Bar dataKey="Project B" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Project C" stackId="a" fill="#ffc658" />
        </BarChart>
      </ResponsiveContainer>
      <table className="w-full text-sm mt-4">
        <thead>
          <tr className="text-left">
            <th>Day</th>
            <th>Project</th>
            <th>Task</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {data.flatMap((day) =>
            Object.entries(day)
              .filter(([key]) => key !== "day")
              .map(([project, hours], index) => (
                <tr key={`${day.day}-${project}-${index}`}>
                  {index === 0 && (
                    <td rowSpan={Object.keys(day).length - 1}>{day.day}</td>
                  )}
                  <td>{project}</td>
                  <td>Various tasks</td>
                  <td>{hours}</td>
                </tr>
              ))
          )}
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

  // Generate sample data for the week
  const generateWeekData = (startDate) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    return days.map((day, index) => {
      const date = new Date(startDate);
      date.setDate(date.getDate() + index);
      return {
        day: `${day} ${date.getDate()}`,
        "Project A": Math.floor(Math.random() * 5) + 1,
        "Project B": Math.floor(Math.random() * 4) + 1,
        "Project C": Math.floor(Math.random() * 3) + 1,
      };
    });
  };

  const weekData = generateWeekData(weekStart);

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
      <Timesheet data={weekData} />
    </div>
  );
};

export default TimesheetsPage;
