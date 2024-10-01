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
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

// WeeklyActivity component
const WeeklyActivity = () => {
  const { darkMode } = useTheme();
  const activityData = [
    { day: "Mon", hours: 6 },
    { day: "Tue", hours: 8 },
    { day: "Wed", hours: 7 },
    { day: "Thu", hours: 9 },
    { day: "Fri", hours: 5 },
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={activityData}>
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
          <Bar dataKey="hours" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// WorkedThisWeek component
const WorkedThisWeek = () => {
  const { darkMode } = useTheme();
  const hoursWorked = 35;
  const totalHours = 40;
  const data = [
    { name: "Worked", value: hoursWorked },
    { name: "Remaining", value: totalHours - hoursWorked },
  ];
  const COLORS = ["#3B82F6", "#E5E7EB"];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-all duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Worked This Week</h2>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
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
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? "#1F2937" : "#FFFFFF",
              color: darkMode ? "#FFFFFF" : "#000000",
              border: "none",
              borderRadius: "0.375rem",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center mt-2">
        <span className="text-sm font-medium">
          {hoursWorked}/{totalHours}h
        </span>
      </div>
    </div>
  );
};

// EarnedThisWeek component
const EarnedThisWeek = () => {
  const { darkMode } = useTheme();
  const earned = 1250;
  const target = 1500;

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Earned This Week</h2>
      <div className="text-3xl font-bold text-green-600">${earned}</div>
      <div
        className={`text-sm transition-colors duration-300 ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        Target: ${target}
      </div>
      <div
        className={`mt-2 text-xs transition-colors duration-300 ${
          darkMode ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {earned >= target
          ? "Target reached!"
          : `${target - earned} more to reach target`}
      </div>
    </div>
  );
};

// ProjectsWorked component
const ProjectsWorked = () => {
  const { darkMode } = useTheme();
  const projects = [
    { name: "Project A", hours: 12 },
    { name: "Project B", hours: 8 },
    { name: "Project C", hours: 15 },
  ];

  return (
    <div
      className={`p-6 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Projects Worked</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.name} className="flex justify-between items-center">
            <span className="text-base">{project.name}</span>
            <span
              className={`text-sm font-medium px-2 py-1 rounded-full transition-colors duration-300 ${
                darkMode
                  ? "bg-gray-700 text-gray-300"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {project.hours}h
            </span>
          </li>
        ))}
      </ul>
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
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
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

// Timesheet component
const Timesheet = () => {
  const { darkMode } = useTheme();
  const entries = [
    { id: 1, project: "Project A", task: "Design", hours: 3 },
    { id: 2, project: "Project B", task: "Development", hours: 5 },
    { id: 3, project: "Project C", task: "Testing", hours: 2 },
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
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

// Projects component
const Projects = () => {
  const { darkMode } = useTheme();
  const projects = [
    { id: 1, name: "Project A", status: "In Progress", completion: 60 },
    { id: 2, name: "Project B", status: "On Hold", completion: 30 },
    { id: 3, name: "Project C", status: "Completed", completion: 100 },
  ];

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">Projects</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={projects}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
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
          <Line type="monotone" dataKey="completion" stroke="#3B82F6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const Dashboard = ({ searchTerm }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "dark" : ""
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <WeeklyActivity />
        <WorkedThisWeek />
        <EarnedThisWeek />
        <ProjectsWorked />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
        <div className="space-y-6">
          <Timesheet />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
