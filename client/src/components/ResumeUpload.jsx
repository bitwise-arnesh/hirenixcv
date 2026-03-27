import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [ragStatus, setRagStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = async () => {
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

      const data = await response.json();

      setScore(data.score);
      setFeedback(data.feedback);
      setRagStatus(data.rag_status);

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

          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />

          <button
            type="button"
            onClick={() => document.getElementById("fileInput").click()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Choose File
          </button>

          {file && (
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Selected: {file.name}
            </p>
          )}

          {file && (
            <button
              type="button"
              onClick={handleUpload}
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
            >
              {loading ? "Analyzing..." : "Upload & Analyze"}
            </button>
          )}

          {/* ATS Score */}
          {score !== null && (
            <div className="mt-8 text-xl font-bold text-blue-600">
              ATS Score: {score}
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className="mt-4 text-lg text-gray-700 dark:text-gray-300">
              {feedback}
            </div>
          )}

          {/* RAG Status */}
          {ragStatus && (
            <div className="mt-4 text-green-600 font-medium">
              {ragStatus}
            </div>
          )}

          {/* 👉 Go to Q&A Button */}
          {score !== null && (
            <button
              onClick={() => navigate("/qa")}
              className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
            >
              Ask Questions About Resume →
            </button>
          )}

        </div>
      </div>
    </section>
  );
}

export default ResumeUpload;