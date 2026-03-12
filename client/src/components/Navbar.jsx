export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        HirenixCV
      </h1>

      {/* Navigation Links */}
      <div className="space-x-6">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Features
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Dashboard
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Interview Prep
        </a>
      </div>

      {/* Button */}
      <button className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
        Get Started
      </button>

    </nav>
  );
}