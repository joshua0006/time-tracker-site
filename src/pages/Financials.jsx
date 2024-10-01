import React from "react";
import { useTheme } from "../ThemeContext";

const Financials = () => {
  const { darkMode } = useTheme();
  const financialData = [
    { category: "Revenue", amount: 150000, change: "+5%" },
    { category: "Expenses", amount: 100000, change: "-2%" },
    { category: "Profit", amount: 50000, change: "+15%" },
    { category: "Cash Flow", amount: 30000, change: "+8%" },
  ];

  return (
    <div
      className={`container mx-auto px-4 py-8 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Financials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {financialData.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow transition-colors duration-300 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <h2 className="text-lg font-semibold mb-2">{item.category}</h2>
            <p className="text-2xl font-bold">
              ${item.amount.toLocaleString()}
            </p>
            <p
              className={`text-sm ${
                item.change.startsWith("+") ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.change}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`mt-8 p-4 rounded-lg shadow transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-lg font-semibold mb-4">Financial Reports</h2>
        <ul className="space-y-2">
          <li>
            <button
              className={`hover:underline transition-colors duration-300 ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            >
              Download Income Statement
            </button>
          </li>
          <li>
            <button
              className={`hover:underline transition-colors duration-300 ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            >
              Download Balance Sheet
            </button>
          </li>
          <li>
            <button
              className={`hover:underline transition-colors duration-300 ${
                darkMode ? "text-blue-400" : "text-blue-500"
              }`}
            >
              Download Cash Flow Statement
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Financials;
