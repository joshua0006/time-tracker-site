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
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";

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

const TrendChart = ({ data, title, dataKey }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
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
          <Line type="monotone" dataKey={dataKey} stroke="#3B82F6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

const ProductivityBreakdown = ({ data }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-4 rounded-lg shadow transition-colors duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Productivity Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Productivity"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
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

  const productivityBreakdown = [
    { subject: "Focus Time", A: 120 },
    { subject: "Meetings", A: 80 },
    { subject: "Communication", A: 100 },
    { subject: "Planning", A: 70 },
    { subject: "Learning", A: 90 },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <TrendChart
          data={productivityTrend}
          title="Productivity Trend"
          dataKey="value"
        />
        <TrendChart
          data={hoursWorkedTrend}
          title="Hours Worked Trend"
          dataKey="value"
        />
      </div>
      <ProductivityBreakdown data={productivityBreakdown} />
    </div>
  );
};

export default Insights;
