import React from "react";
import { useTheme } from "../ThemeContext";

// ActivityChart component
const ActivityChart = ({ data }) => {
  const { darkMode } = useTheme();
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Activity Chart</h2>
      <div className="flex items-end h-40 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className={`w-full transition-all duration-300 ${
                darkMode ? "bg-blue-600" : "bg-blue-500"
              }`}
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
            <span
              className={`text-xs mt-1 transition-colors duration-300 ${
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

// RecentActivity component
const RecentActivity = () => {
  const { darkMode } = useTheme();
  const activities = [
    {
      id: 1,
      action: "Completed task",
      project: "Project A",
      time: "2 hours ago",
    },
    {
      id: 2,
      action: "Added comment",
      project: "Project B",
      time: "4 hours ago",
    },
    {
      id: 3,
      action: "Started new task",
      project: "Project C",
      time: "Yesterday",
    },
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="text-sm">
            <span className="font-medium">{activity.action}</span> on{" "}
            {activity.project}
            <span
              className={`block text-xs transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {activity.time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Activity component
const Activity = () => {
  const { darkMode } = useTheme();

  // Generate random activity data
  const generateRandomData = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.map((day) => ({
      label: day,
      value: Math.floor(Math.random() * 10) + 1, // Random value between 1 and 10
    }));
  };

  const activityData = generateRandomData();

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Activity</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActivityChart data={activityData} />
        <RecentActivity />
      </div>
    </div>
  );
};

// Default export
export default Activity;
