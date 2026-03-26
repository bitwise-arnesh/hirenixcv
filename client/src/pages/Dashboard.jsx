import { useState } from "react";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  // 🔥 NEW STATES
  const [jobDesc, setJobDesc] = useState("");
  const [matchScore, setMatchScore] = useState(null);
  const [missingSkills, setMissingSkills] = useState([]);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("job_description", jobDesc); // 🔥 send JD

    try {
      const res = await fetch("http://127.0.0.1:8000/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Failed to upload");
      }

      const data = await res.json();

      // ATS
      setScore(data.score);
      setSuggestions(data.suggestions || []);

      // 🔥 JD Matching
      setMatchScore(data.match_score ?? null);
      setMissingSkills(data.missing_skills || []);
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>ATS Resume Analysis</h1>

      {/* Upload */}
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      {/* 🔥 Job Description Input */}
      <textarea
        placeholder="Paste job description here..."
        rows="5"
        style={{ width: "100%" }}
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Analyze Resume
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
              <li key={index}>• {s}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 🔥 Match Score */}
      {matchScore !== null && (
        <div>
          <h2>Match Score: {matchScore}%</h2>
        </div>
      )}

      {/* 🔥 Missing Skills */}
      {missingSkills.length > 0 && (
        <div>
          <h3>Missing Skills:</h3>
          <ul>
            {missingSkills.map((s, index) => (
              <li key={index}>• {s}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dashboard;