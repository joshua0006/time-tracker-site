import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import "./Calendar.css";

const Calendar = () => {
  const { darkMode } = useTheme();
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const generateWorkHours = () => {
    const hours = {};
    for (let i = 1; i <= daysInMonth; i++) {
      if (
        [0, 6].includes(
          new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            i
          ).getDay()
        )
      )
        continue;
      hours[i] = 8; // Set a fixed 8 hours for each workday
    }
    return hours;
  };

  const workHours = generateWorkHours();

  const renderCalendarDays = () => {
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
      const monthName = date.toLocaleDateString("en-US", { month: "short" });

      days.push(
        <div key={i} className="calendar-day">
          <div className="day-header">
            <span className="day-name">{dayName},</span>
            <span className="day-date">
              {monthName} {i}
            </span>
          </div>
          {workHours[i] && (
            <div className="work-hours">
              <span className="hours-icon">🕒</span>
              <span className="hours-text">Shift: {workHours[i]} hours</span>
            </div>
          )}
        </div>
      );
    }
    return days;
  };

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className={`calendar-container ${darkMode ? "dark" : "light"}`}>
      <div className="calendar-header">
        <button onClick={prevMonth}>Back</button>
        <h2>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <button onClick={nextMonth}>Next</button>
      </div>
      <div className="calendar-days">{renderCalendarDays()}</div>
    </div>
  );
};

export default Calendar;
