import React from "react";

const WeeklyActivity = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Weekly Activity</h2>
      <div className="text-4xl font-bold mb-2">69%</div>
      <div className="text-sm text-red-500">▼ 4%</div>
      <div className="mt-4 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: "69%" }}
        ></div>
      </div>
    </div>
  );
};

export default WeeklyActivity;
