import React from "react";

const WorkedThisWeek = () => {
  const hoursWorked = 35;
  const totalHours = 40;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Worked This Week</h2>
      <div className="flex items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${(hoursWorked / totalHours) * 100}%` }}
          ></div>
        </div>
        <span className="text-sm font-medium">
          {hoursWorked}/{totalHours}h
        </span>
      </div>
    </div>
  );
};

export default WorkedThisWeek;
