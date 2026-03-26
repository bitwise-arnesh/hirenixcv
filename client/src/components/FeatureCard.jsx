import { useNavigate } from "react-router-dom";

export default function FeatureCard({ title, description }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "ATS Resume Analysis") {
      navigate("/dashboard");
    } else if (title === "Resume Optimization") {
      navigate("/dashboard"); // temporary
    } else if (title === "Job Description Matching") {
      navigate("/dashboard");
    } else if (title === "Resume Q&A") {
      navigate("/resume-qa");
    } else if (title === "Interview Preparation") {
      navigate("/interview-prep");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 text-center cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}