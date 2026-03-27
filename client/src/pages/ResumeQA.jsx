import { useState } from "react";

function ResumeQA() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/qa/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error(error);
      setAnswer("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Resume Q&A </h2>

      <textarea
        placeholder="Ask something about your resume..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        rows={4}
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "10px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={handleAsk}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Thinking..." : "Ask"}
      </button>

      {answer && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            background: "#f3f4f6",
            borderRadius: "8px",
          }}
        >
          <h3>Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

export default ResumeQA;