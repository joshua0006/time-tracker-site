import React from "react";
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
  Line,
  ComposedChart,
} from "recharts";

// ActivityChart component
const ActivityChart = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold mb-6">Activity Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
              color: darkMode ? "#FFFFFF" : "#000000",
              border: "none",
              borderRadius: "0.375rem",
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="value" fill="#3B82F6" name="Value" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="tasks"
            stroke="#10B981"
            name="Tasks"
          />
        </ComposedChart>
      </ResponsiveContainer>
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
      tasks: Math.floor(Math.random() * 5) + 1, // Random tasks between 1 and 5
      hours: Math.floor(Math.random() * 8) + 1, // Random hours between 1 and 8
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
