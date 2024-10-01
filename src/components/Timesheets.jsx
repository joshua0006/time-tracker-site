import React from "react";

const Timesheet = () => {
  const entries = [
    { id: 1, project: "Project A", task: "Design", hours: 3 },
    { id: 2, project: "Project B", task: "Development", hours: 5 },
    { id: 3, project: "Project C", task: "Testing", hours: 2 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
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

export default Timesheet;
