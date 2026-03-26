import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ResumeQA from "./pages/ResumeQA";
import InterviewPrep from "./pages/InterviewPrep";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resume-qa" element={<ResumeQA />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
      </Routes>
    </>
  );
}

export default App;