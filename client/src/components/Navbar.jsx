import { useState, useEffect } from "react";

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
      <h1 className="text-2xl font-bold text-blue-600">
        HirenixCV
      </h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Features
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Dashboard
        </a>
        <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Interview Prep
        </a>
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
        <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
          Get Started
        </button>

      </div>

    </nav>
  );
}