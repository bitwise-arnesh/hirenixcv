import { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload");
      }

      const data = await res.json();

      setScore(data.score);
      setSuggestions(data.suggestions || []);
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ATS Resume Analysis</h1>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload Resume
      </button>

      {/* Score */}
      {score !== null && (
        <div>
          <h2>ATS Score: {score}</h2>
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <h3>Suggestions:</h3>
          <ul>
            {suggestions.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;