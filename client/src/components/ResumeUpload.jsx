function ResumeUpload() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">
          Upload Your Resume
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Upload your resume and get instant ATS analysis.
        </p>

        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl p-10 hover:border-blue-500 transition">

          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Drag & drop your resume here
          </p>

          <p className="text-gray-400 dark:text-gray-500 mb-6">
            or
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Choose File
          </button>

        </div>

      </div>
    </section>
  );
}

export default ResumeUpload;