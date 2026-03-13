import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white dark:bg-gray-900 shadow-md">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600">
        HirenixCV
      </Link>

      {/* Navigation Links */}
      <div className="space-x-6">
        <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Home
        </Link>

        <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Dashboard
        </Link>

        <Link to="/resume-qa" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Resume Q&A
        </Link>

        <Link to="/interview-prep" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Interview Prep
        </Link>
      </div>

      <div className="flex items-center gap-4">

        {/* DARK MODE BUTTON */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 border rounded-lg text-sm"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        {/* Get Started */}
        <Link
          to="/dashboard"
          className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Get Started
        </Link>

      </div>

    </nav>
  );
}