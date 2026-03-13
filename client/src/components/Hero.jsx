export default function Hero() {
  return (
    <section className="text-center py-28 rounded-xl mb-20 
    bg-gradient-to-b from-blue-50 to-white 
    dark:from-gray-800 dark:to-gray-900 
    transition-colors duration-300">

      <h1 className="text-5xl font-bold mb-6">
        Build <span className="text-blue-600">ATS-Friendly</span> Resumes
      </h1>

      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
        HirenixCV helps you analyze your resume, improve ATS score,
        and prepare for interviews with AI-powered tools.
      </p>

      <div className="flex justify-center gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Upload Resume
        </button>

        <button className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          Learn More
        </button>
      </div>

    </section>
  );
}