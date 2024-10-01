import React from "react";
import { useTheme } from "../ThemeContext";

// Define InsightCard component within the same file
const InsightCard = ({ title, value, change, isPositive }) => {
  const { darkMode } = useTheme();
  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold">{value}</span>
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {isPositive ? "↑" : "↓"} {change}%
        </span>
      </div>
    </div>
  );
};

// Define TrendChart component within the same file
const TrendChart = ({ data, title }) => {
  const { darkMode } = useTheme();
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="flex items-end h-40 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="bg-blue-500 w-full transition-all duration-300"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span
              className={`text-xs mt-1 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Insights = () => {
  const { darkMode } = useTheme();
  const insightData = [
    { title: "Productivity Score", value: "85", change: "5", isPositive: true },
    {
      title: "Average Daily Hours",
      value: "7.5",
      change: "2",
      isPositive: true,
    },
    {
      title: "Project Completion Rate",
      value: "92%",
      change: "3",
      isPositive: true,
    },
    { title: "Task Overdue Rate", value: "8%", change: "1", isPositive: false },
  ];

  const productivityTrend = [
    { label: "Mon", value: 75 },
    { label: "Tue", value: 82 },
    { label: "Wed", value: 78 },
    { label: "Thu", value: 85 },
    { label: "Fri", value: 88 },
    { label: "Sat", value: 72 },
    { label: "Sun", value: 70 },
  ];

  const hoursWorkedTrend = [
    { label: "Mon", value: 8 },
    { label: "Tue", value: 7.5 },
    { label: "Wed", value: 8.2 },
    { label: "Thu", value: 7.8 },
    { label: "Fri", value: 7.2 },
    { label: "Sat", value: 4 },
    { label: "Sun", value: 3 },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {insightData.map((insight, index) => (
          <InsightCard key={index} {...insight} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart data={productivityTrend} title="Productivity Trend" />
        <TrendChart data={hoursWorkedTrend} title="Hours Worked Trend" />
      </div>
    </div>
  );
};

export default Insights;
