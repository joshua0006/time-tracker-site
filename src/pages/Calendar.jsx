import React from "react";
import { useTheme } from "../ThemeContext";

const Calendar = () => {
  const { darkMode } = useTheme();
  // This is a placeholder for a more complex calendar component
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = getDaysInMonth(currentMonth, currentYear);

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(
      <div key={i} className="p-2 border text-center">
        {i}
      </div>
    );
  }

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Calendar</h1>
      <div
        className={`p-4 rounded-lg shadow transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-lg font-semibold mb-2">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentYear}
        </h2>
        <div className="grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className={`font-bold text-center ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {day}
            </div>
          ))}
          {days.map((day, index) => (
            <div
              key={index}
              className={`p-2 border text-center ${
                darkMode
                  ? "border-gray-700 text-gray-300 bg-gray-800"
                  : "border-gray-200 text-gray-700 bg-white"
              } ${
                day.props.children
                  ? ""
                  : darkMode
                  ? "bg-gray-900"
                  : "bg-gray-100"
              }`}
            >
              {day.props.children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
