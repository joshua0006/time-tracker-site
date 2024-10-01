import React from "react";

const RecentActivity = () => {
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
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>
      <ul className="space-y-2">
        {activities.map((activity) => (
          <li key={activity.id} className="text-sm">
            <span className="font-medium">{activity.action}</span> on{" "}
            {activity.project}
            <span className="block text-xs text-gray-500">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
