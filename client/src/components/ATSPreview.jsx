export default function ATSPreview() {
  return (
    <section className="px-8 py-24 bg-white">

      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-6">
          Improve Your Resume Score
        </h2>

        <p className="text-gray-600 mb-12">
          Upload your resume and get instant AI-powered feedback to improve
          your chances of passing ATS systems.
        </p>

        <div className="bg-gray-50 p-10 rounded-2xl shadow-md max-w-xl mx-auto">

          <h3 className="text-xl font-semibold mb-6">
            Resume ATS Score
          </h3>

          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div className="bg-blue-600 h-4 rounded-full w-3/4"></div>
          </div>

          <p className="text-gray-700">
            Your resume scores <strong>75%</strong>. Add more job-specific
            keywords to improve your ranking.
          </p>

        </div>

      </div>

    </section>
  );
}