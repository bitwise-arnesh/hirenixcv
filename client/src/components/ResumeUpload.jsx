import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("File selected:", selectedFile);
    setFile(selectedFile);
  };

  const handleUpload = async () => {
    console.log("Upload button clicked");

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await fetch("http://127.0.0.1:8000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);

      const data = await response.json();
      console.log("Response data:", data);

      setScore(data.score);
      setFeedback(data.feedback);

    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

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

          {/* Hidden input */}
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />

          {/* Choose file button */}
          <button
            type="button"
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Choose File
          </button>

          {/* Show selected file */}
          {file && (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Selected: {file.name}
            </p>
          )}

          {/* Upload button */}
          {file && (
            <button
              type="button"
              onClick={handleUpload}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              {loading ? "Analyzing..." : "Upload & Analyze"}
            </button>
          )}

          {/* Show score */}
          {score !== null && (
            <div className="mt-8 text-xl font-bold text-blue-600">
              ATS Score: {score}
            </div>
          )}

          {/* Show feedback */}
          {feedback && (
            <div className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {feedback}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default ResumeUpload;