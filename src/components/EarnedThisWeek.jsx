import React from "react";

const EarnedThisWeek = () => {
  const earned = 1250;
  const target = 1500;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Earned This Week</h2>
      <div className="text-3xl font-bold text-green-600">${earned}</div>
      <div className="text-sm text-gray-500">Target: ${target}</div>
      <div className="mt-2 text-xs text-gray-400">
        {earned >= target
          ? "Target reached!"
          : `${target - earned} more to reach target`}
      </div>
    </div>
  );
};

export default EarnedThisWeek;
