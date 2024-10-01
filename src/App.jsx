import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Timesheets from "./pages/Timesheets";
import Activity from "./pages/Activity";
import Insights from "./pages/Insights";
import ProjectManagement from "./pages/ProjectManagement";
import Calendar from "./pages/Calendar";
import Reports from "./pages/Reports";
import Teams from "./pages/Teams";
import Financials from "./pages/Financials";

function AppContent() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const { darkMode } = useTheme();

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div
          className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${
            isCollapsed ? "ml-16" : "ml-64"
          }`}
        >
          <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <main
            className={`flex-1 overflow-x-hidden overflow-y-auto transition-all duration-300 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-black"
            }`}
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/timesheets" element={<Timesheets />} />
              <Route path="/activity" element={<Activity />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/projects" element={<ProjectManagement />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/financials" element={<Financials />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
