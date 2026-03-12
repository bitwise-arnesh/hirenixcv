export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">

      <h1 className="text-5xl font-bold text-gray-900 mb-6">
        Build ATS-Friendly Resumes
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        HirenixCV helps you analyze your resume, improve ATS score, 
        and prepare for interviews with AI-powered tools.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Upload Resume
        </button>

        <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100">
          Learn More
        </button>
      </div>

    </section>
  );
}